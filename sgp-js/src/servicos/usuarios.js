import { api } from "./api";

export async function listarUsuarios(setUsuarios) {
    await api.get('/usuarios')
                .then((response) => setUsuarios(response.data))
                .catch((error) => console.error(error));
}

export async function buscarUsuarioPeloId(id, setUsuarios) {
    await api.get(`/usuarios/${id}`)
            .then((response) => setUsuarios(response.data))
            .catch((error) => console.error(error));
}

export async function cadastrarUsuario(usuario) {
    await api.post('/usuarios', usuario)
            .then(() => {})
            .catch((error) => console.error(error));
}

export async function atualizarUsuario(id, usuario) {
    await api.put(`/usuarios/${id}`, usuario)
            .then(() => {})
            .catch((error) => console.error(error));
}

export async function deletarUsuario(id) {
    await api.delete(`/usuarios/${id}`)
            .then(() => {})
            .catch((error) => console.error(error));
}