import React, { useState } from 'react';
import { Send, MessageSquare, X } from 'lucide-react';

export default function HireModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desenvolvimento Web',
    details: ''
  });

  const [loadingEmail, setLoadingEmail] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  // O teu número de WhatsApp (formato internacional sem + ou traços)
  const TELEFONE_WHATSAPP = "244940200769"; // Substitui pelo teu número
  
  // O teu endpoint do Formspree para envio de e-mail (ou semelhante)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/SEU_FORM_ID"; // Substitui pelo teu ID

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. Ação para enviar via WhatsApp
  const handleWhatsApp = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.details) {
      alert("Por favor, preenche o nome e os detalhes do projeto.");
      return;
    }

    const mensagem = `Olá! Meu nome é *${formData.name}* (${formData.email}).%0A%0A` +
      `*Tipo de Serviço:* ${formData.service}%0A` +
      `*Detalhes do Projeto:*%0A${formData.details}`;

    const url = `https://wa.me/${TELEFONE_WHATSAPP}?text=${mensagem}`;
    window.open(url, '_blank');
  };

  // 2. Ação para enviar via E-mail
  const handleEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.details) {
      alert("Por favor, preenche todos os campos para enviar por e-mail.");
      return;
    }

    setLoadingEmail(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setEmailSuccess(true);
        setFormData({ name: '', email: '', service: 'Desenvolvimento Web', details: '' });
        setTimeout(() => setEmailSuccess(false), 4000);
      } else {
        alert("Ocorreu um erro ao enviar o e-mail. Tenta via WhatsApp!");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão. Tenta via WhatsApp!");
    } finally {
      setLoadingEmail(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900 dark:text-white">
        
        {/* Botão Fechar */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-slate-800"
        >
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Vamos trabalhar juntos?</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Preenche o formulário abaixo para discutir o teu projeto.
        </p>

        {emailSuccess && (
          <div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
            Mensagem enviada com sucesso! Entrarei em contacto em breve.
          </div>
        )}

        <form className="mt-4 space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Teu nome completo"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu.email@exemplo.com"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
            />
          </div>

          {/* Tipo de Serviço */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tipo de Serviço</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
            >
              <option value="Desenvolvimento Web">Desenvolvimento Web (Full Stack / Laravel / React)</option>
              <option value="Desenvolvimento Backend / API">Desenvolvimento Backend / API</option>
              <option value="Sistemas Web Personalizados">Sistemas Web Personalizados</option>
              <option value="Consultoria / Outros">Consultoria / Outros</option>
            </select>
          </div>

          {/* Detalhes do Projeto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Detalhes do Projeto</label>
            <textarea
              name="details"
              rows="3"
              value={formData.details}
              onChange={handleChange}
              placeholder="Descreve brevemente o que precisas..."
              required
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800"
            ></textarea>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-2 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
            >
              <MessageSquare size={18} />
              Enviar via WhatsApp
            </button>

            <button
              type="button"
              onClick={handleEmail}
              disabled={loadingEmail}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
              <Send size={18} />
              {loadingEmail ? 'A enviar...' : 'Enviar por E-mail'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}