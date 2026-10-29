export type FundingCall = {
  titre: string;
  financeur: string;
  dateLimite: string | null;
  montantMaxCentimes: number | null;
  thematiques: string[];
  url: string | null;
  description: string | null;
};
