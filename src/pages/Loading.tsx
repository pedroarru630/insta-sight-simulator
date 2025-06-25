
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Loading = () => {
  const navigate = useNavigate();

  // Auto-navigate to confirmation after 3 seconds for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/profile-confirmation');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      {/* Progress bar at top */}
      <div className="w-full px-4 pt-4">
        <Progress value={60} className="h-2" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-lg">
          {/* Central icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="text-white text-2xl">
                🕵️
              </div>
            </div>
          </div>

          {/* Loading spinner */}
          <div className="flex justify-center mb-6">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          {/* Main title */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Procurando...
          </h1>

          {/* Subtitle */}
          <p className="text-center text-gray-600 leading-relaxed">
            Nossos robôs estão procurando informações sobre esse perfil, aguarde um momento
          </p>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1 text-gray-400">
              📊
            </div>
            <span className="text-xs text-gray-400">Painel</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1 text-orange-500">
              🔍
            </div>
            <span className="text-xs text-orange-500 font-medium">Espionar</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-1 text-gray-400">
              🖼️
            </div>
            <span className="text-xs text-gray-400">Prints</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
