import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    // Simulation d'envoi d'email
    try {
      // Ici vous intégreriez votre service de réinitialisation de mot de passe
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation

      setSuccess('Un email de réinitialisation a été envoyé à votre adresse. Vérifiez votre boîte de réception.');
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate('/login')}
          className="flex items-center text-blue-600 hover:text-blue-500 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à la connexion
        </button>

        {/* Logo et titre */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">BG</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Mot de passe oublié
          </h2>
          <p className="text-gray-600">
            Entrez votre adresse email et nous vous enverrons un lien de réinitialisation
          </p>
        </div>

        {/* Formulaire */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            {/* Messages d'erreur/succès */}
            {error && (
              <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                <p className="text-sm text-green-700">{success}</p>
              </div>
            )}

            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </div>
              ) : (
                'Envoyer le lien de réinitialisation'
              )}
            </button>
          </form>
        </div>

        {/* Liens */}
        <div className="text-center space-y-2">
          <p className="text-gray-600">
            Vous vous souvenez de votre mot de passe ?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
            >
              Se connecter
            </Link>
          </p>
          <p className="text-gray-600">
            Pas encore de compte ?{' '}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;