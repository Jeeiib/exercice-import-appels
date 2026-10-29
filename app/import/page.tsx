import { importerFichier } from "./actions";

export default function ImportPage() {
  return (
    <main>
      <h1>Importer des appels à projets</h1>
      <form action={importerFichier}>
        <input type="file" name="fichier" accept=".csv,.xlsx" required />
        <button type="submit">Importer</button>
      </form>
    </main>
  );
}
