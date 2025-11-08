'use client';

import { ArrowRight, Calendar, Shield, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-medical-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-medical-300" />
            <span className="text-sm font-medium">Especialista CRM 12345/MG</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Cuidando da Saúde dos
            <span className="text-medical-300"> Trabalhadores</span>
          </h1>

          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Medicina do Trabalho especializada em avaliações ocupacionais, perícias e programas de saúde empresarial.
            Compromisso com excelência e humanização.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group">
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-700">
              <Calendar className="mr-2 w-5 h-5" />
              Ver Disponibilidade
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: '15+', label: 'Anos de Experiência' },
              { value: '5000+', label: 'Atendimentos' },
              { value: '100%', label: 'Satisfação' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-medical-300">{stat.value}</div>
                <div className="text-sm text-primary-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-medical-400/20 to-primary-400/20 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-64 h-64 text-white/20" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-medical-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Certificação SESMT</div>
                <div className="text-sm text-gray-600">Segurança do Trabalho</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
