import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput, type LeadResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation<LeadResponse, Error, LeadInput>({
    mutationFn: async (data) => {
      const validated = api.leads.create.input.parse(data);
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.leads.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Gagal mengirim data. Silakan coba lagi.");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: (data) => {
      // Format the WhatsApp message exactly as requested
      const text = `Halo, saya calon pembeli langsung dan tertarik dengan properti Hotel Godean.\n\nNama: ${data.name}\nAsal Daerah: ${data.origin}\nRencana Pembiayaan: ${data.financingPlan}`;
      
      const whatsappUrl = `https://wa.me/6281391278889?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Berhasil!",
        description: "Mengarahkan Anda ke WhatsApp...",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: error.message,
      });
    }
  });
}
