/* ======================= ICONS (inline SVG strings) ======================= */
const ic = {
  dashboard:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>',
  package:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
  tags:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  award:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  image:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  palette:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
  bag:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  users:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  ticket:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 9a3 3 0 1 0 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M9 5v14"/></svg>',
  truck:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  receipt:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  webhook:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c0-2.2 1.79-4 4-4H6"/><path d="m6 8 3-5 3 5"/><path d="M9 3v10"/><path d="M12 13v2a4 4 0 0 0 4 4h1a4 4 0 0 0 0-8h-1"/></svg>',
  chart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></svg>',
  search:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  plus:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5v14"/></svg>',
  pencil:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
  trash:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>',
  x:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  grip:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>',
  alert:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/></svg>',
  up:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>',
  down:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M23 18l-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/></svg>',
  mail:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  phone:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.732 1.6l-.46.36a1 1 0 0 0-.312 1.226 12.04 12.04 0 0 0 6.336 6.34Z"/></svg>',
  pin:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  download:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>',
  check:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>',
  copy:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  link:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8"/></svg>',
};

/* ======================= MOCK DATA ======================= */
const money = v => v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});

const CATEGORIES = [
  {id:'uniformes',label:'Uniformes',color:'#0B3D91',count:34},
  {id:'calcados',label:'Calçados',color:'#E5232A',count:21},
  {id:'futebol',label:'Futebol',color:'#0B3D91',count:28},
  {id:'acessorios',label:'Acessórios',color:'#111111',count:17},
];

const PRODUCTS = [
  {id:'p1',name:'Camisa Uniforme Escolar Azul',cat:'uniformes',price:89.9,stock:142,status:'ativo',img:'👕'},
  {id:'p2',name:'Chuteira Society Performance',cat:'calcados',price:219.9,stock:8,status:'ativo',img:'👟'},
  {id:'p3',name:'Camisa Futebol Time Titular',cat:'futebol',price:159.9,stock:0,status:'esgotado',img:'🎽'},
  {id:'p4',name:'Boné Aba Reta Bordado',cat:'acessorios',price:59.9,stock:63,status:'ativo',img:'🧢'},
  {id:'p5',name:'Kit Uniforme Completo P-GG',cat:'uniformes',price:249.9,stock:5,status:'ativo',img:'👕'},
  {id:'p6',name:'Meião Profissional',cat:'futebol',price:29.9,stock:210,status:'rascunho',img:'🧦'},
  {id:'p7',name:'Caneca Personalizada',cat:'acessorios',price:39.9,stock:4,status:'ativo',img:'☕'},
];

const ORDERS = [
  {id:'MNZ-10482',cliente:'Fernanda Costa',total:219.9,pagamento:'PIX',status:'pago',data:'14/07'},
  {id:'MNZ-10481',cliente:'Lucas Andrade',total:89.9,pagamento:'Cartão',status:'enviado',data:'14/07'},
  {id:'MNZ-10480',cliente:'Grupo Escolar Vera Cruz',total:3249.0,pagamento:'PIX',status:'pendente',data:'13/07'},
  {id:'MNZ-10479',cliente:'Rafael Souza',total:159.9,pagamento:'Cartão',status:'entregue',data:'12/07'},
  {id:'MNZ-10478',cliente:'Marina Lopes',total:59.9,pagamento:'PIX',status:'entregue',data:'12/07'},
];

const BANNERS = [
  {id:'b1',eyebrow:'Coleção 2026',title:'Uniformes de Verdade',tab:'uniformes',bg:'linear-gradient(160deg,#0B3D91,#E5232A)'},
  {id:'b2',eyebrow:'Nova linha',title:'Bonés & Brindes',tab:'acessorios',bg:'linear-gradient(150deg,#111,#1a1a2e)'},
  {id:'b3',eyebrow:'Performance',title:'Corra Mais Longe',tab:'calcados',bg:'linear-gradient(160deg,#E5232A,#111)'},
  {id:'b4',eyebrow:'Frete grátis',title:'Futebol É Aqui',tab:'futebol',bg:'linear-gradient(155deg,#0B3D91,#111)'},
];

const COUPONS = [
  {code:'VOLTAAULA10',desc:'10% em uniformes escolares',uses:84,limit:200,status:'ativo'},
  {code:'FRETEGRATIS',desc:'Frete grátis acima de R$150',uses:312,limit:null,status:'ativo'},
  {code:'TIME2026',desc:'15% em kits de futebol',uses:47,limit:100,status:'pausado'},
];

const TEAM = [
  {name:'Matheus Nunes',role:'Admin',email:'matheus@grupomnz.com.br',access:'Total'},
  {name:'Carla Reis',role:'Marketing',email:'carla@grupomnz.com.br',access:'Banners & Produtos'},
  {name:'Diego Farias',role:'Estoque',email:'diego@grupomnz.com.br',access:'Produtos & Estoque'},
];

const CUSTOMERS = [
  {name:'Fernanda Costa',email:'fernanda.costa@gmail.com',phone:'(45) 99123-4567',city:'Palotina/PR',orders:6,spent:1247.4,tag:'Recorrente'},
  {name:'Grupo Escolar Vera Cruz',email:'compras@veracruz.edu.br',phone:'(45) 99876-1122',city:'Toledo/PR',orders:14,spent:18420.0,tag:'Atacado'},
  {name:'Lucas Andrade',email:'lucas.andrade@hotmail.com',phone:'(44) 98877-3344',city:'Maringá/PR',orders:2,spent:189.8,tag:'Novo'},
  {name:'Rafael Souza',email:'rsouza91@outlook.com',phone:'(45) 99234-8890',city:'Palotina/PR',orders:9,spent:2103.5,tag:'Recorrente'},
  {name:'Marina Lopes',email:'marinalopes@gmail.com',phone:'(46) 99911-0033',city:'Assis Chateaubriand/PR',orders:1,spent:59.9,tag:'Novo'},
];

const SHIPPING_ZONES = [
  {region:'Palotina e região (até 50km)',prazo:'1-2 dias úteis',frete:'Grátis acima de R$150',metodo:'Entrega própria'},
  {region:'Paraná (demais cidades)',prazo:'3-5 dias úteis',frete:'Calculado por CEP',metodo:'Correios / PAC'},
  {region:'Sul e Sudeste',prazo:'5-8 dias úteis',frete:'Calculado por CEP',metodo:'Correios / Sedex'},
  {region:'Demais regiões do Brasil',prazo:'8-15 dias úteis',frete:'Calculado por CEP',metodo:'Transportadora'},
];

const PAYMENT_METHODS = [
  {name:'PIX',taxa:'0,99%',status:'ativo',gateway:'Mercado Pago'},
  {name:'Cartão de crédito (até 12x)',taxa:'3,49% + parcela',status:'ativo',gateway:'Mercado Pago'},
  {name:'Boleto bancário',taxa:'R$ 2,90 fixo',status:'ativo',gateway:'Mercado Pago'},
  {name:'Carteira de crédito (loja)',taxa:'0%',status:'pausado',gateway:'Interno'},
];

const REPORTS_MONTHLY = [
  {mes:'Fev/26',vendas:38200},{mes:'Mar/26',vendas:41750},{mes:'Abr/26',vendas:35980},
  {mes:'Mai/26',vendas:47100},{mes:'Jun/26',vendas:52300},{mes:'Jul/26',vendas:44892},
];

const TOP_PRODUCTS_REPORT = [
  {name:'Camisa Uniforme Escolar Azul',vendidos:284,receita:25531.6},
  {name:'Chuteira Society Performance',vendidos:156,receita:34304.4},
  {name:'Kit Uniforme Completo P-GG',vendidos:98,receita:24490.2},
  {name:'Boné Aba Reta Bordado',vendidos:211,receita:12639.9},
];

const BRANDS = [
  {name:'Meinerz',produtos:66,destaque:true},{name:'Nike',produtos:7,destaque:true},
  {name:'Adidas',produtos:8,destaque:true},{name:'Puma',produtos:25,destaque:false},
  {name:'New Balance',produtos:19,destaque:false},{name:'Penalty',produtos:12,destaque:false},
];

const INTEGRATIONS = [
  {name:'WhatsApp Business',desc:'Botão de contato e recuperação de carrinho',status:'conectado',icon:'💬'},
  {name:'Webhook de pedidos',desc:'Envia evento a cada novo pedido pago',status:'conectado',icon:'🔗'},
  {name:'Webservice de estoque',desc:'Sincroniza estoque com o ERP',status:'atenção',icon:'📦'},
  {name:'E-mail marketing',desc:'Dispara campanhas via Newsletter',status:'desconectado',icon:'✉️'},
  {name:'Google Analytics / Meta Pixel',desc:'Rastreamento de conversões',status:'conectado',icon:'📊'},
];

/* ======================= NAV ======================= */
const NAV = [
  {group:'Visão geral', items:[
    {id:'dashboard',label:'Painel',icon:'dashboard'},
  ]},
  {group:'Catálogo', items:[
    {id:'produtos',label:'Produtos',icon:'package'},
    {id:'categorias',label:'Categorias',icon:'tags'},
    {id:'marcas',label:'Marcas',icon:'award'},
    {id:'banners',label:'Banners',icon:'image'},
    {id:'aparencia',label:'Aparência do app',icon:'palette'},
  ]},
  {group:'Vendas', items:[
    {id:'pedidos',label:'Pedidos',icon:'bag'},
    {id:'clientes',label:'Clientes',icon:'users'},
    {id:'cupons',label:'Cupons',icon:'ticket'},
  ]},
  {group:'Operação', items:[
    {id:'frete',label:'Frete & Pagamento',icon:'truck'},
    {id:'fiscal',label:'Fiscal / NF-e',icon:'receipt'},
    {id:'integracoes',label:'Integrações',icon:'webhook'},
  ]},
  {group:'Gestão', items:[
    {id:'relatorios',label:'Relatórios',icon:'chart'},
    {id:'equipe',label:'Equipe',icon:'users'},
  ]},
];

const SECTION_META = {
  dashboard:['Painel geral','Visão rápida da loja hoje'],
  produtos:['Produtos','O que aparece no catálogo do app'],
  categorias:['Categorias','As abas da tela inicial'],
  marcas:['Marcas','Filtro de marcas do catálogo'],
  banners:['Banners','Carrossel da home do app'],
  aparencia:['Aparência do app','Cores, logo e comportamento'],
  pedidos:['Pedidos','Acompanhamento de vendas'],
  clientes:['Clientes','Base de clientes e histórico de compras'],
  cupons:['Cupons','Descontos e promoções'],
  frete:['Frete & Pagamento','Zonas de entrega e formas de pagamento'],
  fiscal:['Fiscal / NF-e','Configuração tributária e notas fiscais'],
  integracoes:['Integrações','WhatsApp, webhooks e chave de API'],
  relatorios:['Relatórios','Desempenho de vendas da loja'],
  equipe:['Equipe','Acessos ao painel'],
};

function badge(status){ return `<span class="badge b-${status.replace(/\s+/g,'')}">${status}</span>`; }
function initials(name){ return name.split(' ').map(n=>n[0]).slice(0,2).join(''); }

/* ======================= RENDER NAV ======================= */
function renderNav(active){
  const el = document.getElementById('nav');
  el.innerHTML = NAV.map(g => `
    <div class="nav-group-label">${g.group}</div>
    ${g.items.map(n => `
      <button data-id="${n.id}" class="${active===n.id?'active':''}">
        ${ic[n.icon]} ${n.label} <span class="dot"></span>
      </button>
    `).join('')}
  `).join('');
  el.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setActive(b.dataset.id)));
}

/* ======================= SECTIONS ======================= */
function Dashboard(){
  const stats = [
    {label:'Vendas hoje',value:'R$ 4.892',delta:'+12%',cls:'up',icon:ic.up},
    {label:'Pedidos pendentes',value:'7',delta:'-2',cls:'down',icon:ic.down},
    {label:'Produtos ativos',value:'94',delta:'+3',cls:'up',icon:ic.up},
    {label:'Estoque baixo',value:'4',delta:'atenção',cls:'warn',icon:ic.alert},
  ];
  return `
    <div class="grid grid-4">
      ${stats.map(s=>`
        <div class="card">
          <div class="stat-label">${s.label}</div>
          <div class="stat-value">${s.value}</div>
          <div class="stat-delta ${s.cls}">${s.icon} ${s.delta}</div>
        </div>`).join('')}
    </div>
    <div class="grid grid-3" style="margin-top:16px">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <h3>Pedidos recentes</h3>
        </div>
        <div class="divide">
          ${ORDERS.slice(0,4).map(o=>`
            <div class="row-flex" style="justify-content:space-between;padding:10px 0">
              <div>
                <div class="mono" style="font-size:11px;color:var(--muted-2)">${o.id}</div>
                <div style="font-weight:600">${o.cliente}</div>
              </div>
              <div style="text-align:right">
                <div style="font-weight:700">${money(o.total)}</div>
                ${badge(o.status)}
              </div>
            </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <h3>Estoque crítico</h3>
        ${PRODUCTS.filter(p=>p.stock<=8).map(p=>`
          <div class="row-flex" style="margin-bottom:10px">
            <span style="font-size:20px">${p.img}</span>
            <div style="flex:1;min-width:0">
              <div style="font-weight:600;font-size:13px">${p.name}</div>
              <div style="font-size:11px;color:var(--muted-2)">${p.stock} unidades</div>
            </div>
            <span style="width:8px;height:8px;border-radius:50%;background:#ef4444"></span>
          </div>`).join('')}
      </div>
    </div>
  `;
}

let prodQuery='', prodCat='all';
let PRODUCTS_CACHE = []; // populado pelo Supabase em loadProducts()

async function loadProducts(){
  const { data, error } = await supabaseClient
    .from('products')
    .select('id, name, price, status, category:categories(slug), product_variants(stock)')
    .order('created_at', { ascending:false });

  if(error){ console.error('Erro ao buscar produtos:', error); return; }

  PRODUCTS_CACHE = data.map(p => ({
    id: p.id,
    name: p.name,
    cat: p.category?.slug || null,
    price: Number(p.price),
    stock: (p.product_variants||[]).reduce((s,v)=>s+v.stock, 0),
    status: p.status,
    img: '👕', // troque depois por p.product_images quando tiver upload de imagem
  }));

  if(active === 'produtos') renderContent();
}

function Produtos(){
  const filtered = PRODUCTS_CACHE.filter(p => (prodCat==='all'||p.cat===prodCat) && p.name.toLowerCase().includes(prodQuery.toLowerCase()));
  return `
    <div class="toolbar">
      <div class="row-flex" style="flex-wrap:wrap">
        <div class="search-wrap">${ic.search}<input id="prod-search" placeholder="Buscar produto..." value="${prodQuery}"/></div>
        <select id="prod-cat">
          <option value="all">Todas categorias</option>
          ${CATEGORIES.map(c=>`<option value="${c.id}" ${prodCat===c.id?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>
      <button class="btn btn-primary" onclick="openProductDrawer(null)">${ic.plus} Novo produto</button>
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>Produto</th><th>Categoria</th><th>Preço</th><th>Estoque</th><th>Status</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>
          ${filtered.length ? filtered.map(p=>`
            <tr>
              <td><div class="row-flex"><div style="width:36px;height:36px;border-radius:8px;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:18px">${p.img}</div><span style="font-weight:600">${p.name}</span></div></td>
              <td class="muted">${CATEGORIES.find(c=>c.id===p.cat)?.label||''}</td>
              <td style="font-weight:700">${money(p.price)}</td>
              <td style="${p.stock<=8?'color:#ef4444;font-weight:700':''}">${p.stock}</td>
              <td>${badge(p.status)}</td>
              <td style="text-align:right">
                <button class="icon-btn" onclick='openProductDrawer(${JSON.stringify(p)})'>${ic.pencil}</button>
                <button class="btn-danger-ghost icon-btn">${ic.trash}</button>
              </td>
            </tr>`).join('') : `<tr><td colspan="6" class="empty-td">Nenhum produto encontrado.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
function bindProdutosEvents(){
  const s=document.getElementById('prod-search'), c=document.getElementById('prod-cat');
  if(s) s.addEventListener('input', e=>{prodQuery=e.target.value; renderContent();});
  if(c) c.addEventListener('change', e=>{prodCat=e.target.value; renderContent();});
}
function openProductDrawer(p){
  const isNew = !p;
  const html = `
    <div class="drawer-head"><h3>${isNew?'Novo produto':'Editar produto'}</h3><button class="icon-btn" onclick="closeDrawer()">${ic.x}</button></div>
    <div class="drawer-body">
      <div class="upload-box">${isNew?'📷':p.img}</div>
      <div class="field"><label>Nome do produto</label><input value="${isNew?'':p.name}"/></div>
      <div class="grid grid-2">
        <div class="field"><label>Preço (R$)</label><input value="${isNew?'':p.price}"/></div>
        <div class="field"><label>Estoque</label><input value="${isNew?'':p.stock}"/></div>
      </div>
      <div class="field"><label>Categoria</label>
        <select>${CATEGORIES.map(c=>`<option ${!isNew&&p.cat===c.id?'selected':''}>${c.label}</option>`).join('')}</select>
      </div>
      <div class="field"><label>Tamanhos disponíveis</label>
        <div class="sizes">${['PP','P','M','G','GG'].map(s=>`<button class="size-chip">${s}</button>`).join('')}</div>
      </div>
      <div class="field"><label>Status</label>
        <select>
          <option value="ativo" ${!isNew&&p.status==='ativo'?'selected':''}>Ativo (visível no app)</option>
          <option value="rascunho" ${isNew||p.status==='rascunho'?'selected':''}>Rascunho (oculto)</option>
          <option value="esgotado" ${!isNew&&p.status==='esgotado'?'selected':''}>Esgotado</option>
        </select>
      </div>
    </div>
    <div class="drawer-foot">
      <button class="btn btn-outline" onclick="closeDrawer()">Cancelar</button>
      <button class="btn btn-primary" onclick="closeDrawer()">Salvar no app</button>
    </div>
  `;
  openDrawer(html);
}

function Categorias(){
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Essas categorias aparecem como abas na tela inicial do app.</p>
      <button class="btn btn-primary">${ic.plus} Nova categoria</button>
    </div>
    <div class="grid grid-2">
      ${CATEGORIES.map(c=>`
        <div class="card row-flex" style="padding:14px 18px">
          <span style="color:var(--muted-2);cursor:grab">${ic.grip}</span>
          <span style="width:36px;height:36px;border-radius:9px;background:${c.color};flex-shrink:0"></span>
          <div style="flex:1"><div style="font-weight:700">${c.label}</div><div class="muted" style="font-size:12px">${c.count} produtos</div></div>
          <button class="icon-btn">${ic.pencil}</button>
        </div>`).join('')}
    </div>
  `;
}

function Marcas(){
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Marcas exibidas como filtro no catálogo do app.</p>
      <button class="btn btn-primary">${ic.plus} Nova marca</button>
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>Marca</th><th>Produtos</th><th>Destaque no app</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>
          ${BRANDS.map(b=>`
            <tr>
              <td style="font-weight:600">${b.name}</td>
              <td class="muted">${b.produtos}</td>
              <td>${b.destaque? `<span style="color:#047857;font-size:12px;font-weight:700;display:inline-flex;gap:4px;align-items:center">${ic.check} Sim</span>` : `<span class="muted" style="font-size:12px">Não</span>`}</td>
              <td style="text-align:right"><button class="icon-btn">${ic.pencil}</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function Banners(){
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Controla os slides do carrossel na home do app — arraste para reordenar.</p>
      <button class="btn btn-primary">${ic.plus} Novo banner</button>
    </div>
    <div class="grid grid-2">
      ${BANNERS.map(b=>`
        <div class="banner-card">
          <div class="banner-hero" style="background:${b.bg}">
            <span style="position:absolute;top:10px;right:10px;opacity:.6">${ic.grip}</span>
            <div class="eyebrow">${b.eyebrow}</div>
            <div class="title">${b.title}</div>
          </div>
          <div class="banner-foot">
            <span class="muted">Leva para: <b style="color:#3f3f46">${CATEGORIES.find(c=>c.id===b.tab)?.label}</b></span>
            <button class="icon-btn">${ic.pencil}</button>
          </div>
        </div>`).join('')}
    </div>
  `;
}

function Aparencia(){
  return `
    <div class="grid grid-2">
      <div>
        <div class="card" style="margin-bottom:16px">
          <h3>Identidade visual</h3>
          <div class="upload-box" style="aspect-ratio:3/1">Logo do app (arraste ou clique)</div>
          <div class="grid grid-2">
            <div class="field"><label>Cor principal</label>
              <div class="row-flex"><input type="color" id="c-primary" value="#0B3D91" style="width:36px;height:36px;padding:2px;border-radius:8px"/><input id="c-primary-text" value="#0B3D91" class="mono" style="flex:1"/></div>
            </div>
            <div class="field"><label>Cor de destaque</label>
              <div class="row-flex"><input type="color" id="c-accent" value="#E5232A" style="width:36px;height:36px;padding:2px;border-radius:8px"/><input id="c-accent-text" value="#E5232A" class="mono" style="flex:1"/></div>
            </div>
          </div>
        </div>
        <div class="card" style="margin-bottom:16px">
          <h3>Comportamento</h3>
          ${[['Exibir busca fixa no topo',true],['Modal de CEP na abertura do app',false],['Centralizar logo',true]].map(([label,val])=>`
            <div class="row-flex" style="justify-content:space-between;padding:6px 0;font-size:13px">
              <span>${label}</span>
              <label class="toggle"><input type="checkbox" ${val?'checked':''}/><span class="track"></span></label>
            </div>`).join('')}
        </div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;padding:11px">Publicar alterações no app</button>
      </div>
      <div>
        <div class="phone">
          <div class="phone-bar" id="phone-bar" style="background:#0B3D91">Meinerz Esportes</div>
          <div class="phone-hero" id="phone-hero" style="background:linear-gradient(160deg,#0B3D91,#E5232A)">
            <div class="eyebrow">Coleção 2026</div>
            <div class="title">Uniformes de Verdade</div>
          </div>
          <div class="phone-grid"><div>👕</div><div>👟</div></div>
        </div>
      </div>
    </div>
  `;
}
function bindAparenciaEvents(){
  const cp=document.getElementById('c-primary'), cpt=document.getElementById('c-primary-text');
  const ca=document.getElementById('c-accent'), cat=document.getElementById('c-accent-text');
  if(!cp) return;
  function update(){
    document.getElementById('phone-bar').style.background = cpt.value;
    document.getElementById('phone-hero').style.background = `linear-gradient(160deg, ${cpt.value}, ${cat.value})`;
  }
  cp.addEventListener('input', ()=>{cpt.value=cp.value; update();});
  ca.addEventListener('input', ()=>{cat.value=ca.value; update();});
  cpt.addEventListener('input', ()=>{cp.value=cpt.value; update();});
  cat.addEventListener('input', ()=>{ca.value=cat.value; update();});
}

let orderFilter='all';
function Pedidos(){
  const statuses=['all','pendente','pago','enviado','entregue'];
  const filtered = ORDERS.filter(o=>orderFilter==='all'||o.status===orderFilter);
  return `
    <div class="filters" style="margin-bottom:14px">
      ${statuses.map(s=>`<button class="chip ${orderFilter===s?'active':''}" data-s="${s}">${s==='all'?'Todos':s}</button>`).join('')}
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>Pedido</th><th>Cliente</th><th>Pagamento</th><th>Total</th><th>Data</th><th>Status</th></tr></thead>
        <tbody>
          ${filtered.map(o=>`
            <tr>
              <td class="mono" style="font-size:11.5px;color:var(--muted)">${o.id}</td>
              <td style="font-weight:600">${o.cliente}</td>
              <td class="muted">${o.pagamento}</td>
              <td style="font-weight:700">${money(o.total)}</td>
              <td class="muted">${o.data}</td>
              <td>${badge(o.status)}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}
function bindPedidosEvents(){
  document.querySelectorAll('.chip[data-s]').forEach(b=>b.addEventListener('click',()=>{orderFilter=b.dataset.s; renderContent();}));
}

let custQuery='';
function Clientes(){
  const filtered = CUSTOMERS.filter(c=>c.name.toLowerCase().includes(custQuery.toLowerCase()));
  return `
    <div class="search-wrap" style="margin-bottom:14px">${ic.search}<input id="cust-search" placeholder="Buscar cliente..." value="${custQuery}"/></div>
    <div class="table-card">
      <table>
        <thead><tr><th>Cliente</th><th>Cidade</th><th>Pedidos</th><th>Total gasto</th><th>Perfil</th></tr></thead>
        <tbody>
          ${filtered.map((c,i)=>`
            <tr style="cursor:pointer" onclick='openCustomerDrawer(${JSON.stringify(c)})'>
              <td><div style="font-weight:600">${c.name}</div><div class="muted" style="font-size:11.5px">${c.email}</div></td>
              <td class="muted">${c.city}</td>
              <td>${c.orders}</td>
              <td style="font-weight:700">${money(c.spent)}</td>
              <td><span class="badge" style="background:${c.tag==='Recorrente'?'#eff6ff':c.tag==='Atacado'?'#faf5ff':'#ecfdf5'};color:${c.tag==='Recorrente'?'#1d4ed8':c.tag==='Atacado'?'#7e22ce':'#047857'}">${c.tag}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}
function bindClientesEvents(){
  const s=document.getElementById('cust-search');
  if(s) s.addEventListener('input', e=>{custQuery=e.target.value; renderContent();});
}
function openCustomerDrawer(c){
  const html = `
    <div class="drawer-head"><h3>Perfil do cliente</h3><button class="icon-btn" onclick="closeDrawer()">${ic.x}</button></div>
    <div class="drawer-body">
      <div class="row-flex" style="margin-bottom:16px">
        <div class="avatar blue" style="width:48px;height:48px;font-size:15px">${initials(c.name)}</div>
        <div><div style="font-weight:700">${c.name}</div>${badge(c.tag)}</div>
      </div>
      <div style="font-size:13px;color:#3f3f46;display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
        <div class="row-flex">${ic.mail}${c.email}</div>
        <div class="row-flex">${ic.phone}${c.phone}</div>
        <div class="row-flex">${ic.pin}${c.city}</div>
      </div>
      <div class="grid grid-2">
        <div style="background:var(--bg);border-radius:12px;padding:12px">
          <div class="stat-label" style="font-size:10px">Pedidos</div>
          <div style="font-size:20px;font-weight:900">${c.orders}</div>
        </div>
        <div style="background:var(--bg);border-radius:12px;padding:12px">
          <div class="stat-label" style="font-size:10px">Total gasto</div>
          <div style="font-size:20px;font-weight:900">${money(c.spent)}</div>
        </div>
      </div>
    </div>
  `;
  openDrawer(html);
}

function Cupons(){
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Cupons de desconto aplicáveis no checkout do app.</p>
      <button class="btn btn-primary">${ic.plus} Novo cupom</button>
    </div>
    <div class="table-card">
      <div class="divide">
        ${COUPONS.map(c=>`
          <div class="row-flex pad-row">
            <div class="mono" style="font-weight:800;background:var(--bg);border-radius:8px;padding:6px 12px;font-size:13px">${c.code}</div>
            <div style="flex:1"><div style="font-size:13px">${c.desc}</div><div class="muted" style="font-size:11.5px">${c.uses} usos${c.limit?` de ${c.limit}`:' · sem limite'}</div></div>
            ${badge(c.status)}
            <button class="icon-btn">${ic.pencil}</button>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function Frete(){
  return `
    <h3 style="display:flex;align-items:center;gap:8px;margin-bottom:12px">${ic.truck} Zonas de entrega</h3>
    <div class="table-card" style="margin-bottom:24px">
      <table>
        <thead><tr><th>Região</th><th>Prazo</th><th>Frete</th><th>Método</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>
          ${SHIPPING_ZONES.map(z=>`
            <tr>
              <td style="font-weight:600">${z.region}</td>
              <td class="muted">${z.prazo}</td>
              <td>${z.frete}</td>
              <td class="muted">${z.metodo}</td>
              <td style="text-align:right"><button class="icon-btn">${ic.pencil}</button></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <h3 style="display:flex;align-items:center;gap:8px;margin-bottom:12px">💳 Formas de pagamento</h3>
    <div class="table-card">
      <div class="divide">
        ${PAYMENT_METHODS.map(m=>`
          <div class="row-flex pad-row">
            <div style="flex:1"><div style="font-weight:600;font-size:13px">${m.name}</div><div class="muted" style="font-size:11.5px">Gateway: ${m.gateway} · Taxa: ${m.taxa}</div></div>
            ${badge(m.status)}
            <label class="toggle"><input type="checkbox" ${m.status==='ativo'?'checked':''}/><span class="track"></span></label>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function Fiscal(){
  return `
    <div class="callout" style="margin-bottom:18px">${ic.alert} Alterações fiscais afetam a emissão de nota em pedidos futuros. Confirme com o contador antes de salvar.</div>
    <div class="card" style="margin-bottom:18px">
      <h3>Configuração fiscal</h3>
      <div class="grid grid-2">
        <div class="field"><label>Regime tributário</label><select><option>Simples Nacional</option><option>Lucro Presumido</option><option>Lucro Real</option></select></div>
        <div class="field"><label>Emissão de NF-e</label><select><option>Automática (ao aprovar pagamento)</option><option>Manual</option><option>Desativada</option></select></div>
        <div class="field"><label>CFOP padrão</label><input value="5.102 - Venda de mercadoria"/></div>
        <div class="field"><label>Ambiente</label><select><option>Produção</option><option>Homologação (testes)</option></select></div>
      </div>
      <button class="btn btn-primary">Salvar configuração</button>
    </div>
    <div class="card">
      <h3>Últimas notas emitidas</h3>
      <div class="divide">
        ${[{pedido:'MNZ-10482',numero:'000.184.221',status:'pago'},{pedido:'MNZ-10481',numero:'000.184.220',status:'pago'},{pedido:'MNZ-10480',numero:'—',status:'pendente'}].map(n=>`
          <div class="row-flex" style="justify-content:space-between;padding:9px 0;font-size:13px">
            <span class="mono" style="color:var(--muted)">${n.pedido}</span>
            <span>${n.numero}</span>
            ${badge(n.status)}
          </div>`).join('')}
      </div>
    </div>
  `;
}

function Integracoes(){
  return `
    <div class="table-card" style="margin-bottom:18px">
      <div class="divide">
        ${INTEGRATIONS.map(i=>`
          <div class="row-flex pad-row">
            <span style="font-size:22px;width:36px;text-align:center">${i.icon}</span>
            <div style="flex:1"><div style="font-weight:600;font-size:13px">${i.name}</div><div class="muted" style="font-size:11.5px">${i.desc}</div></div>
            ${badge(i.status)}
            <button class="btn-outline btn" style="padding:6px 12px;font-size:12px">Configurar</button>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3 style="display:flex;align-items:center;gap:8px">${ic.link} Chave de API do app</h3>
      <p class="muted" style="font-size:12px;margin-top:-8px;margin-bottom:12px">Usada pelo app mobile pra se conectar com o painel. Não compartilhe publicamente.</p>
      <div class="row-flex">
        <input readonly value="mnz_live_sk_7f9a2b4c8d1e6f0a3b5c" class="mono" style="flex:1;background:var(--bg);color:var(--muted)"/>
        <button class="icon-btn" style="border:1px solid var(--border);border-radius:9px;padding:8px">${ic.copy}</button>
      </div>
    </div>
  `;
}

function Relatorios(){
  const max = Math.max(...REPORTS_MONTHLY.map(r=>r.vendas));
  return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:14px">
      <button class="btn btn-outline">${ic.download} Exportar CSV</button>
    </div>
    <div class="card" style="margin-bottom:18px">
      <h3>Vendas por mês</h3>
      <div class="bars">
        ${REPORTS_MONTHLY.map(r=>`
          <div class="bar-col">
            <div class="val">${(r.vendas/1000).toFixed(1)}k</div>
            <div class="bar" style="height:${(r.vendas/max)*100}%"></div>
            <div class="lbl">${r.mes}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3>Produtos mais vendidos no mês</h3>
      <div class="divide">
        ${TOP_PRODUCTS_REPORT.map((p,i)=>`
          <div class="row-flex pad-row" style="padding:10px 0">
            <span style="width:22px;height:22px;border-radius:50%;background:var(--bg);font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;color:var(--muted)">${i+1}</span>
            <span style="flex:1;font-weight:600;font-size:13px">${p.name}</span>
            <span class="muted" style="font-size:12.5px">${p.vendidos} vendidos</span>
            <span style="font-weight:700;width:100px;text-align:right">${money(p.receita)}</span>
          </div>`).join('')}
      </div>
    </div>
  `;
}

function Equipe(){
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Quem pode entrar no painel e o que cada pessoa pode alterar.</p>
      <button class="btn btn-primary">${ic.plus} Convidar pessoa</button>
    </div>
    <div class="table-card">
      <div class="divide">
        ${TEAM.map(t=>`
          <div class="row-flex pad-row">
            <div class="avatar blue" style="width:36px;height:36px;font-size:12px">${initials(t.name)}</div>
            <div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">${t.name}</div><div class="muted" style="font-size:11.5px">${t.email}</div></div>
            <div class="muted" style="font-size:12px">${t.access}</div>
            <span class="badge" style="background:#eff6ff;color:#1d4ed8">${t.role}</span>
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ======================= ROUTER ======================= */
const SECTIONS = {
  dashboard:Dashboard, produtos:Produtos, categorias:Categorias, marcas:Marcas, banners:Banners,
  aparencia:Aparencia, pedidos:Pedidos, clientes:Clientes, cupons:Cupons, frete:Frete,
  fiscal:Fiscal, integracoes:Integracoes, relatorios:Relatorios, equipe:Equipe,
};
const POST_RENDER = { produtos:bindProdutosEvents, pedidos:bindPedidosEvents, clientes:bindClientesEvents, aparencia:bindAparenciaEvents };

let active = 'dashboard';
function setActive(id){
  active = id;
  renderNav(active);
  renderContent();
}
function renderContent(){
  const [title, subtitle] = SECTION_META[active];
  document.getElementById('page-title').textContent = title;
  document.getElementById('page-subtitle').textContent = subtitle;
  document.getElementById('content').innerHTML = SECTIONS[active]();
  if(POST_RENDER[active]) POST_RENDER[active]();
}

function openDrawer(html){
  document.getElementById('drawer').innerHTML = html;
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}
document.getElementById('overlay').addEventListener('click', closeDrawer);

renderNav(active);
renderContent();
loadProducts(); // primeira carga real do Supabase; renderContent() roda de novo quando chegar