import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Schema de validação para o formulário de agendamento
 */
const appointmentSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  data: z.string().optional(),
  servico: z.string().optional(),
  mensagem: z.string().optional()
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

/**
 * Componente AppointmentForm - Formulário de agendamento
 * Inclui validação e envio de dados
 */
export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      nome: "",
      telefone: "",
      email: "",
      data: "",
      servico: "",
      mensagem: ""
    }
  });

  const services = [
    { value: "limpeza", label: "Limpeza de Pele Profunda" },
    { value: "hidratacao", label: "Hidratação Intensiva" },
    { value: "peeling", label: "Peeling Químico" },
    { value: "microagulhamento", label: "Microagulhamento" },
    { value: "drenagem", label: "Drenagem Linfática" },
    { value: "radiofrequencia", label: "Radiofrequência" },
    { value: "outro", label: "Outro" }
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    
    try {
      console.log("Enviando dados do agendamento:", data);
      
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar agendamento");
      }

      const result = await response.json();
      console.log("Resposta do servidor:", result);
      
      toast({
        title: "Agendamento enviado!",
        description: "Entraremos em contato em até 24 horas para confirmar sua consulta.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar agendamento:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg border-0 rounded-2xl w-full max-w-full">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl text-foreground">Agendar Consulta</CardTitle>
      </CardHeader>
      <CardContent className="w-full max-w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Nome completo */}
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-muted-foreground">
                      Nome Completo *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        placeholder="Seu nome completo"
                        className="border-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm sm:text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Telefone */}
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Telefone/WhatsApp *
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="email"
                        placeholder="seu@email.com"
                        className="border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Data preferida */}
              <FormField
                control={form.control}
                name="data"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-gray-700">
                      Data Preferida
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        type="date"
                        className="border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Serviço de interesse */}
            <FormField
              control={form.control}
              name="servico"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Serviço de Interesse
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mensagem */}
            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Mensagem
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field}
                      rows={4}
                      placeholder="Conte-nos um pouco sobre suas necessidades e expectativas..."
                      className="border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Botão de teste de email */}
            <Button 
              type="button"
              onClick={async () => {
                try {
                  const response = await fetch("/api/test-email", { method: "POST" });
                  const result = await response.json();
                  toast({
                    title: response.ok ? "Email teste enviado!" : "Erro no teste",
                    description: result.message,
                    variant: response.ok ? "default" : "destructive"
                  });
                } catch (error) {
                  toast({
                    title: "Erro no teste",
                    description: "Falha ao testar email",
                    variant: "destructive"
                  });
                }
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold mb-4"
            >
              🧪 Testar Email
            </Button>

            {/* Botão de envio */}
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Solicitação
                </>
              )}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              * Campos obrigatórios. Responderemos em até 24 horas.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
