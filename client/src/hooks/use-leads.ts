import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput, type LeadResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation<LeadResponse, Error, LeadInput>({
    mutationFn: async (data) => {
      // Validate the data
      const validated = api.leads.create.input.parse(data);
      
      // langsung arahkan ke WhatsApp tanpa simpan ke database
      const text = `Halo, saya calon pembeli langsung dan tertarik dengan properti Army Look Hotel

Nama: ${validated.name}
Nomor Whatsapp Aktif: ${validated.phone}
Asal Daerah: ${validated.origin}
Rencana Pembiayaan: ${validated.financingPlan}`;
      
      const whatsappUrl = `https://wa.me/6281391278889?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");
      
      toast({
        title: "Berhasil!",
        description: "Mengarahkan Anda ke WhatsApp...",
      });
      
      // Return mock response since we're not saving to database
      return {
        id: Date.now(),
        name: validated.name,
        phone: validated.phone,
        origin: validated.origin,
        financingPlan: validated.financingPlan,
        createdAt: new Date(),
      };
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
