'use client'

import React, { useRef, useState } from 'react';
import useForm from '@/hooks/use-form/use-form';

const RegisterPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submittedData, setSubmittedData] = useState<any>(null); 

  const initialState = {

    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    senha: '',
    confirmarSenha: '',

  };

  const setCustomErrors = (form: HTMLFormElement) => {

    const errors: { [key: string]: string } = {};
    const formData = new FormData(form);
    const dataNascimento = new Date(formData.get('dataNascimento') as string);
    const idade = new Date().getFullYear() - dataNascimento.getFullYear();

    if (idade < 18) {
      errors.dataNascimento = 'Você deve ter mais de 18 anos.';
    }

    const senha = formData.get('senha') as string;
    const confirmarSenha = formData.get('confirmarSenha') as string;

    if (senha !== confirmarSenha) {
      errors.senha = 'As senhas não correspondem.';
    }

    return errors;
    
  };

  const submitCallback = async (values: any) => {
    setSubmittedData(values); 
  };

  const { data, errors, handleChange, handleSubmit, loadingSubmit } = useForm(
    formRef,
    initialState,
    submitCallback,
    undefined,
    setCustomErrors
  );

  const handleBackToLogin = () => {
    window.location.href = '/login'; 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h6 className="text-center text-xl font-semibold mb-4">Register Page</h6>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input 
              type="text" 
              name="nome" 
              value={data.nome} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.nome && <span className="text-red-600 text-sm">{errors.nome}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input 
              type="email" 
              name="email" 
              value={data.email} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CPF</label>
            <input 
              type="text" 
              name="cpf" 
              value={data.cpf} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.cpf && <span className="text-red-600 text-sm">{errors.cpf}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
            <input 
              type="date" 
              name="dataNascimento" 
              value={data.dataNascimento} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.dataNascimento && <span className="text-red-600 text-sm">{errors.dataNascimento}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input 
              type="password" 
              name="senha" 
              value={data.senha} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.senha && <span className="text-red-600 text-sm">{errors.senha}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirmar senha</label>
            <input 
              type="password" 
              name="confirmarSenha" 
              value={data.confirmarSenha} 
              onChange={handleChange} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.confirmarSenha && <span className="text-red-600 text-sm">{errors.confirmarSenha}</span>}
          </div>
          <button 
            type="submit" 
            disabled={loadingSubmit} 
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Cadastrar
          </button>
          <button 
            type="button" 
            onClick={handleBackToLogin} 
            className="w-full mt-2 text-green-500 hover:underline"
          >
            Voltar para Login
          </button>
        </form>
        
        {}
        {submittedData && (
          <div className="mt-6 p-4 bg-gray-200 rounded">
            <h6 className="text-center font-semibold mb-2">Dados Enviados:</h6>
            <pre className="text-sm">{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
