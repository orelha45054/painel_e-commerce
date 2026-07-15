# MNZ.painel — Protótipo do Painel Admin

Protótipo visual do painel administrativo para gerenciar o app/e-commerce do Grupo MNZ (Meinerz Esportes).

## O que é

Três arquivos separados (`index.html`, `style.css`, `script.js`), sem build, sem dependências — abre direto no navegador.

Telas incluídas: Painel, Produtos, Categorias, Marcas, Banners, Aparência do app, Pedidos, Clientes, Cupons, Frete & Pagamento, Fiscal/NF-e, Integrações, Relatórios e Equipe.

Todos os dados exibidos são fictícios (mock), só pra ilustrar o layout e as funcionalidades.

## Como rodar

Não precisa de instalação. Duas opções:

1. Abra o `index.html` direto no navegador (duplo clique).
2. Ou publique com GitHub Pages: `Settings → Pages → Deploy from branch → main / (root)`. O link fica algo como `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

## Próximos passos

- Conectar os dados mockados (`PRODUCTS`, `ORDERS`, `CUSTOMERS`, etc. no `<script>` do `index.html`) a um backend real (Supabase).
- Adicionar autenticação de verdade.
- Ligar o painel ao app mobile via API.
