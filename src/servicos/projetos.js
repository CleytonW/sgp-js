import { api } from "./api";

export async function listarProjetos(setProjetos) {
    await api.get('/projetos')
        .then((response) => setProjetos(response.data.content))
        .catch((error) => console.error(error));
}


