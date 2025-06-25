
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Lock, Eye, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MeuProprioPerfilFinalResults = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Full scrollable content */}
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header with profile */}
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=face" alt="Fernanda" />
                <AvatarFallback className="text-2xl">F</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Olá Fernanda</h1>
          <p className="text-orange-500 font-medium mb-6">@afelopes</p>
          
          <h2 className="text-xl font-bold text-gray-800 mb-6">Análise Concluída!</h2>
        </div>

        {/* Results cards */}
        <div className="px-6 space-y-4 mb-6">
          {/* Green card */}
          <Card className="p-4 border-2 border-green-200 bg-green-50">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-green-800">3 perfis de Ubatuba</p>
                <p className="text-sm text-green-600">estão no seu perfil agora</p>
              </div>
            </div>
          </Card>

          {/* Orange card */}
          <Card className="p-4 border-2 border-orange-200 bg-orange-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-2xl mr-3">👥</span>
                <div>
                  <p className="font-semibold text-orange-800">15 Stalker's identificados</p>
                  <p className="text-sm text-orange-600">na última semana</p>
                </div>
              </div>
              <span className="text-orange-500 font-bold">+12</span>
            </div>
          </Card>

          {/* Red alert card */}
          <Card className="p-4 border-2 border-red-200 bg-red-50">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <p className="font-semibold text-red-800">Alerta Crítico: 1 Stalker</p>
              </div>
              <p className="text-sm text-red-600 mb-3">obsessivo encontrado</p>
              <p className="text-red-700 font-medium mb-4">Alguém pode estar te vigiando!</p>
            </div>
            
            <div className="space-y-2 text-xs text-red-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span>Esse Stalker pode estar coletando informações sobre você.</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span>Ele está mencionando seu nome frequentemente em conversas privadas.</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span>Notamos interações suspeitas entre esse Stalker e alguém próximo a você.</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span>O usuário pode estar tentando se aproximar com você indiretamente através de você.</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
                <span>Realizou buscas externas conectando seu nome ao perfil desconhecidos.</span>
              </div>
            </div>
          </Card>

          {/* Warning banner */}
          <div className="bg-red-100 border border-red-300 rounded-lg p-3 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700 text-sm font-medium">Não saia dessa página.</span>
          </div>
        </div>

        {/* Time period */}
        <div className="px-6 mb-6">
          <p className="text-center text-gray-600 mb-2">Liberamos apenas UMA PRÉVIA por aparelho.</p>
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-800">⏰ Última semana</p>
            <p className="text-sm text-gray-600">18/06 - 25/06</p>
          </div>
        </div>

        {/* Story activity section */}
        <div className="px-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Atividade nos stories</h3>
          
          <div className="flex space-x-3 mb-4">
            <div className="relative flex-1">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl h-32 flex items-end p-3">
                <div className="text-white">
                  <p className="text-2xl font-bold">9</p>
                  <p className="text-xs">perfis assistiram +13x</p>
                </div>
              </div>
              <div className="absolute top-2 left-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback className="text-xs">@</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="relative flex-1">
              <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl h-32 flex items-end p-3">
                <div className="text-white">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-xs">perfis assistiram +11x</p>
                </div>
              </div>
              <div className="absolute top-2 left-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback className="text-xs">@</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="relative flex-1">
              <div className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl h-32 flex items-end p-3">
                <div className="text-white">
                  <p className="text-xs">praia encantinha</p>
                </div>
              </div>
              <div className="absolute top-2 left-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback className="text-xs">@</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-red-600 mb-4">
            Veja tudo que acontece nos seus stories no relatório completo
          </p>
          
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-6">
            🔓 Revelar perseguidores
          </Button>
        </div>

        {/* Visitor profiles section */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Visitaram seu perfil essa semana de 2 à 7 vezes:
          </h3>
          
          <div className="flex space-x-4 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl mb-2"></div>
              <p className="text-xs font-semibold">Jâ****</p>
              <p className="text-xs text-gray-500">jo******</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-2"></div>
              <p className="text-xs font-semibold">De****</p>
              <p className="text-xs text-gray-500">deo*****</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-2"></div>
              <p className="text-xs font-semibold">Abi</p>
              <p className="text-xs text-gray-500">ste</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="px-6 mb-6">
          <p className="text-center text-orange-500 font-medium mb-4">... e mais:</p>
          
          <div className="space-y-4">
            <Card className="p-4 bg-gray-50">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-4">15</div>
                <div>
                  <p className="font-semibold text-gray-800">Pessoas tiraram print do seu perfil</p>
                  <p className="text-sm text-gray-600">nos últimos 7 dias</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-gray-50">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-gray-800 mr-4">3</div>
                <div>
                  <p className="font-semibold text-gray-800">Pessoas mencionaram seu</p>
                  <p className="font-semibold text-gray-800">nome em conversas no direct</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-orange-50 border border-orange-200">
              <div className="flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <p className="font-semibold text-orange-800">Descubra seus Stalker's</p>
                  <p className="text-sm text-orange-600">no relatório completo</p>
                </div>
              </div>
            </Card>
          </div>
          
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4 mb-6">
            🔓 Descobrir stalkers
          </Button>
        </div>

        {/* Recovered prints section */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            <span className="text-orange-500">Prints</span> recuperados
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Nossa inteligência artificial procurou por todo o Instagram atrás de conversas que mencionam o seu nome
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Tem amigos querendo se afastar de você</h4>
            <p className="text-sm text-gray-600 mb-4">
              Detectamos 3x a palavra "afastar" nos últimos 7 dias
            </p>
            
            <div className="relative">
              <div className="bg-black rounded-xl p-6 text-center">
                <div className="text-red-500 text-xl font-bold mb-2">Alerta!</div>
                <p className="text-white text-sm mb-4">
                  Essa conversa contém linguagens impróprias e sensíveis envolvendo seu nome
                </p>
                <div className="text-xs text-gray-400 mb-4">
                  Por estar motivos, nossa inteligência artificial decidiu censurar esta conversa.
                </div>
                <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white text-2xl">🚫</div>
                </div>
                <p className="text-white text-sm font-semibold">
                  Desbloqueie o Relatório Completo para visualizar essa mensagem
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <button className="bg-gray-800 rounded-full p-2">
                  <div className="text-white text-sm">←</div>
                </button>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              ...e mais <span className="font-semibold">3</span> menções e prints
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-700 text-sm font-medium text-center">
              DESCUBRA QUEM FALOU DE VOCÊ NO RELATÓRIO COMPLETO
            </p>
          </div>
          
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-6">
            🔓 Desbloquear prints
          </Button>
        </div>

        {/* Main stalkers section */}
        <div className="px-6 mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            Principais STALKER'S <span className="text-sm font-normal">detectados essa semana</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="p-4 text-center bg-gray-50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center blur-sm">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-gray-800 mb-1">@m*********</p>
              <p className="text-xs text-gray-600 mb-2">Visitou seu perfil</p>
              <p className="text-sm font-bold text-gray-800">12 vezes ontem</p>
            </Card>
            
            <Card className="p-4 text-center bg-gray-50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center blur-sm">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-gray-800 mb-1">@f*********</p>
              <p className="text-xs text-gray-600 mb-2">Colocou você nos</p>
              <p className="text-sm font-bold text-gray-800">melhores amigos</p>
            </Card>
            
            <Card className="p-4 text-center bg-gray-50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center blur-sm">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-gray-800 mb-1">@j*********</p>
              <p className="text-xs text-gray-600 mb-2">Encaminhou</p>
              <p className="text-sm font-bold text-gray-800">um post seu para @a******</p>
            </Card>
            
            <Card className="p-4 text-center bg-gray-50">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center blur-sm">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <p className="font-semibold text-gray-800 mb-1">@d*********</p>
              <p className="text-xs text-gray-600 mb-2">Tirou print de</p>
              <p className="text-sm font-bold text-gray-800">uma conversa na sua DM hoje</p>
            </Card>
          </div>
        </div>

        {/* Close Friends section */}
        <div className="px-6 mb-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">Close Friends</h3>
            <p className="text-sm text-gray-600">
              @f****** e outras 4 pessoas que você não segue, te adicionaram ao Close Friends
            </p>
          </div>
          
          <div className="mb-4">
            <p className="text-center text-orange-500 text-sm font-medium mb-3">Ver Pessoas ></p>
            
            <div className="flex space-x-2 mb-4">
              <div className="flex-1 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl h-32 relative">
                <div className="absolute top-2 left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-2 right-2">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl h-32 relative">
                <div className="absolute top-2 left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-2 right-2">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <div className="flex-1 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl h-32 relative">
                <div className="absolute top-2 left-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-2 right-2">
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-gray-600 mb-4">
              ...e outras 2 pessoas que você não segue
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-orange-700 text-sm font-medium text-center">
                Tenha acesso a tudo isso sem censuras no relatório completo
              </p>
            </div>
            
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              👁️ Ver relatório completo
            </Button>
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
    </div>
  );
};

export default MeuProprioPerfilFinalResults;
