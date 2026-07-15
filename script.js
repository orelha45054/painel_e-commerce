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
  logout:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
};

const money = v => (Number(v)||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function badge(status){ return `<span class="badge b-${String(status).replace(/\s+/g,'')}">${status}</span>`; }
function initials(name){ return (name||'').split(' ').map(n=>n[0]).slice(0,2).join(''); }
function esc(s){ return (s??'').toString().replace(/"/g,'&quot;'); }

/* ======================= NAV ======================= */
const NAV = [
  {group:'Visão geral', items:[{id:'dashboard',label:'Painel',icon:'dashboard'}]},
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

/* ======================= DB CACHE + GENERIC HELPERS ======================= */
const DB = {
  categories:null, brands:null, products:null, banners:null, customers:null,
  orders:null, coupons:null, shippingZones:null, paymentMethods:null,
  fiscal:null, invoices:null, integrations:null, team:null, appearance:null,
};

function toast(msg, isError){
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `position:fixed;bottom:20px;right:20px;background:${isError?'#ef4444':'#111827'};color:#fff;padding:10px 16px;border-radius:10px;font-size:13px;font-weight:600;z-index:100;box-shadow:0 8px 20px rgba(0,0,0,.2)`;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2600);
}

async function dbSelect(table, select='*', opts={}){
  let q = supabaseClient.from(table).select(select);
  if(opts.order) q = q.order(opts.order, {ascending: opts.asc !== false});
  if(opts.eq) Object.entries(opts.eq).forEach(([k,v])=>{ q = q.eq(k,v); });
  const { data, error } = await q;
  if(error){ console.error(`Erro lendo ${table}:`, error); toast('Erro ao carregar '+table+': '+error.message, true); return []; }
  return data;
}
async function dbInsert(table, payload){
  const { data, error } = await supabaseClient.from(table).insert(payload).select();
  if(error){ toast('Erro ao salvar: '+error.message, true); return null; }
  toast('Salvo!');
  return data[0];
}
async function dbUpdate(table, id, payload){
  const { data, error } = await supabaseClient.from(table).update(payload).eq('id', id).select();
  if(error){ toast('Erro ao salvar: '+error.message, true); return null; }
  toast('Salvo!');
  return data[0];
}
async function dbDelete(table, id){
  const { error } = await supabaseClient.from(table).delete().eq('id', id);
  if(error){ toast('Erro ao excluir: '+error.message, true); return false; }
  toast('Excluído.');
  return true;
}

/* ======================= LOADERS (um por seção) ======================= */
async function loadCategories(){ DB.categories = await dbSelect('categories','*',{order:'position'}); }
async function loadBrands(){ DB.brands = await dbSelect('brands','*',{order:'name'}); }
async function loadProducts(){
  const rows = await dbSelect('products','id,name,price,status,sku,category_id,brand_id,categories(slug,label),product_variants(id,stock)');
  DB.products = rows.map(p => ({
    id:p.id, name:p.name, price:Number(p.price), status:p.status, sku:p.sku,
    category_id:p.category_id, brand_id:p.brand_id,
    catLabel: p.categories?.label || '—',
    stock: (p.product_variants||[]).reduce((s,v)=>s+(v.stock||0),0),
    variantId: p.product_variants?.[0]?.id || null,
  }));
}
async function loadBanners(){ DB.banners = await dbSelect('banners','*,categories(slug,label)',{order:'position'}); }
async function loadCustomers(){ DB.customers = await dbSelect('customers','*',{order:'created_at',asc:false}); }
async function loadOrders(){
  const rows = await dbSelect('orders','*,customers(name)',{order:'created_at',asc:false});
  DB.orders = rows.map(o=>({...o, clienteNome:o.customers?.name || 'Cliente removido'}));
}
async function loadCoupons(){ DB.coupons = await dbSelect('coupons','*',{order:'created_at',asc:false}); }
async function loadShipping(){ DB.shippingZones = await dbSelect('shipping_zones','*',{order:'position'}); }
async function loadPayments(){ DB.paymentMethods = await dbSelect('payment_methods','*',{order:'name'}); }
async function loadFiscal(){
  const rows = await dbSelect('fiscal_config','*');
  DB.fiscal = rows[0] || null;
  DB.invoices = await dbSelect('invoices','*,orders(order_number)',{order:'issued_at',asc:false});
}
async function loadIntegrations(){ DB.integrations = await dbSelect('integrations','*',{order:'name'}); }
async function loadTeam(){ DB.team = await dbSelect('team_members','*',{order:'invited_at'}); }
async function loadAppearance(){
  const rows = await dbSelect('app_appearance','*');
  DB.appearance = rows[0] || null;
}

const LOADERS = {
  produtos: async()=>{ if(!DB.categories) await loadCategories(); if(!DB.brands) await loadBrands(); await loadProducts(); },
  categorias: loadCategories,
  marcas: loadBrands,
  banners: async()=>{ if(!DB.categories) await loadCategories(); await loadBanners(); },
  aparencia: loadAppearance,
  pedidos: loadOrders,
  clientes: loadCustomers,
  cupons: loadCoupons,
  frete: async()=>{ await loadShipping(); await loadPayments(); },
  fiscal: loadFiscal,
  integracoes: loadIntegrations,
  relatorios: async()=>{ await loadOrders(); },
  equipe: loadTeam,
};

/* ======================= GENERIC FORM DRAWER ======================= */
function fieldHtml(f){
  const val = f.value ?? '';
  if(f.type==='select'){
    return `<div class="field"><label>${f.label}</label><select id="${f.id}">${f.options.map(o=>`<option value="${esc(o.value)}" ${String(o.value)===String(val)?'selected':''}>${o.label}</option>`).join('')}</select></div>`;
  }
  if(f.type==='checkbox'){
    return `<div class="row-flex" style="justify-content:space-between;padding:8px 0;font-size:13px">${f.label}<label class="toggle"><input type="checkbox" id="${f.id}" ${val?'checked':''}/><span class="track"></span></label></div>`;
  }
  if(f.type==='textarea'){
    return `<div class="field"><label>${f.label}</label><textarea id="${f.id}" rows="3" style="width:100%">${val}</textarea></div>`;
  }
  return `<div class="field"><label>${f.label}</label><input id="${f.id}" type="${f.type||'text'}" value="${esc(val)}"/></div>`;
}
function openFormDrawer({title, fields, onSave, onDelete}){
  const html = `
    <div class="drawer-head"><h3>${title}</h3><button class="icon-btn" onclick="closeDrawer()">${ic.x}</button></div>
    <div class="drawer-body">${fields.map(fieldHtml).join('')}</div>
    <div class="drawer-foot">
      ${onDelete ? `<button class="btn-danger-ghost icon-btn" id="drawer-del-btn" style="border:1px solid var(--border);border-radius:9px">${ic.trash}</button>` : ''}
      <button class="btn btn-outline" onclick="closeDrawer()">Cancelar</button>
      <button class="btn btn-primary" id="drawer-save-btn">Salvar</button>
    </div>
  `;
  openDrawer(html);
  document.getElementById('drawer-save-btn').addEventListener('click', async ()=>{
    const values = {};
    fields.forEach(f=>{
      const el = document.getElementById(f.id);
      values[f.id] = f.type==='checkbox' ? el.checked : el.value;
    });
    await onSave(values);
  });
  if(onDelete){
    document.getElementById('drawer-del-btn').addEventListener('click', async ()=>{
      if(confirm('Tem certeza que quer excluir? Essa ação não pode ser desfeita.')) await onDelete();
    });
  }
}

/* ======================= DASHBOARD ======================= */
function Dashboard(){
  const products = DB.products || [];
  const orders = DB.orders || [];
  const pendentes = orders.filter(o=>o.status==='pendente').length;
  const ativos = products.filter(p=>p.status==='ativo').length;
  const criticos = products.filter(p=>p.stock<=8);
  const vendasHoje = orders
    .filter(o=> new Date(o.created_at).toDateString() === new Date().toDateString())
    .reduce((s,o)=>s+Number(o.total||0),0);

  const stats = [
    {label:'Vendas hoje',value:money(vendasHoje),icon:ic.up,cls:'up'},
    {label:'Pedidos pendentes',value:String(pendentes),icon:ic.alert,cls:'warn'},
    {label:'Produtos ativos',value:String(ativos),icon:ic.up,cls:'up'},
    {label:'Estoque baixo',value:String(criticos.length),icon:ic.alert,cls:'warn'},
  ];
  return `
    <div class="grid grid-4">
      ${stats.map(s=>`<div class="card"><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div><div class="stat-delta ${s.cls}">${s.icon}</div></div>`).join('')}
    </div>
    <div class="grid grid-3" style="margin-top:16px">
      <div class="card">
        <h3>Pedidos recentes</h3>
        <div class="divide">
          ${orders.slice(0,5).map(o=>`
            <div class="row-flex" style="justify-content:space-between;padding:10px 0">
              <div><div class="mono" style="font-size:11px;color:var(--muted-2)">${o.order_number}</div><div style="font-weight:600">${o.clienteNome}</div></div>
              <div style="text-align:right"><div style="font-weight:700">${money(o.total)}</div>${badge(o.status)}</div>
            </div>`).join('') || `<p class="muted" style="font-size:13px">Nenhum pedido ainda.</p>`}
        </div>
      </div>
      <div class="card">
        <h3>Estoque crítico</h3>
        ${criticos.map(p=>`
          <div class="row-flex" style="margin-bottom:10px">
            <div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">${p.name}</div><div class="muted" style="font-size:11px">${p.stock} unidades</div></div>
            <span style="width:8px;height:8px;border-radius:50%;background:#ef4444"></span>
          </div>`).join('') || `<p class="muted" style="font-size:13px">Nenhum produto com estoque crítico.</p>`}
      </div>
    </div>
  `;
}

/* ======================= PRODUTOS ======================= */
let prodQuery='', prodCat='all';
function Produtos(){
  const list = DB.products || [];
  const filtered = list.filter(p => (prodCat==='all'||p.category_id===prodCat) && p.name.toLowerCase().includes(prodQuery.toLowerCase()));
  return `
    <div class="toolbar">
      <div class="row-flex" style="flex-wrap:wrap">
        <div class="search-wrap">${ic.search}<input id="prod-search" placeholder="Buscar produto..." value="${esc(prodQuery)}"/></div>
        <select id="prod-cat">
          <option value="all">Todas categorias</option>
          ${(DB.categories||[]).map(c=>`<option value="${c.id}" ${prodCat===c.id?'selected':''}>${c.label}</option>`).join('')}
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
              <td style="font-weight:600">${p.name}</td>
              <td class="muted">${p.catLabel}</td>
              <td style="font-weight:700">${money(p.price)}</td>
              <td style="${p.stock<=8?'color:#ef4444;font-weight:700':''}">${p.stock}</td>
              <td>${badge(p.status)}</td>
              <td style="text-align:right"><button class="icon-btn" onclick='openProductDrawer(${JSON.stringify(p)})'>${ic.pencil}</button></td>
            </tr>`).join('') : `<tr><td colspan="6" class="empty-td">${DB.products===null?'Carregando...':'Nenhum produto encontrado.'}</td></tr>`}
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
  openFormDrawer({
    title: p ? 'Editar produto' : 'Novo produto',
    fields: [
      {id:'f-name', label:'Nome do produto', value:p?.name},
      {id:'f-price', label:'Preço (R$)', type:'number', value:p?.price},
      {id:'f-stock', label:'Estoque', type:'number', value:p?.stock},
      {id:'f-cat', label:'Categoria', type:'select', value:p?.category_id, options:(DB.categories||[]).map(c=>({value:c.id,label:c.label}))},
      {id:'f-status', label:'Status', type:'select', value:p?.status||'rascunho', options:[
        {value:'ativo',label:'Ativo (visível no app)'},{value:'rascunho',label:'Rascunho (oculto)'},{value:'esgotado',label:'Esgotado'}]},
    ],
    onSave: async (v)=>{
      const slug = v['f-name'].toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'') // remove acentos
        .replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') + '-' + Date.now().toString(36);
      const payload = { name:v['f-name'], slug, price:Number(v['f-price'])||0, category_id:v['f-cat']||null, status:v['f-status'] };
      let saved;
      if(p){ saved = await dbUpdate('products', p.id, payload); }
      else { saved = await dbInsert('products', payload); }
      if(!saved) return;
      const stockVal = Number(v['f-stock'])||0;
      if(p?.variantId){ await dbUpdate('product_variants', p.variantId, {stock:stockVal}); }
      else { await dbInsert('product_variants', {product_id:saved.id, stock:stockVal}); }
      closeDrawer(); await loadProducts(); renderContent();
    },
    onDelete: p ? async ()=>{ if(await dbDelete('products', p.id)){ closeDrawer(); await loadProducts(); renderContent(); } } : null,
  });
}

/* ======================= CATEGORIAS ======================= */
function Categorias(){
  const list = DB.categories || [];
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Essas categorias aparecem como abas na tela inicial do app.</p>
      <button class="btn btn-primary" onclick="openCategoriaDrawer(null)">${ic.plus} Nova categoria</button>
    </div>
    <div class="grid grid-2">
      ${list.map(c=>`
        <div class="card row-flex" style="padding:14px 18px">
          <span style="width:36px;height:36px;border-radius:9px;background:${c.color||'#999'};flex-shrink:0"></span>
          <div style="flex:1"><div style="font-weight:700">${c.label}</div><div class="muted" style="font-size:12px">/${c.slug}</div></div>
          <button class="icon-btn" onclick='openCategoriaDrawer(${JSON.stringify(c)})'>${ic.pencil}</button>
        </div>`).join('') || `<p class="muted">${DB.categories===null?'Carregando...':'Nenhuma categoria ainda.'}</p>`}
    </div>
  `;
}
function openCategoriaDrawer(c){
  openFormDrawer({
    title: c ? 'Editar categoria' : 'Nova categoria',
    fields: [
      {id:'f-label', label:'Nome', value:c?.label},
      {id:'f-slug', label:'Slug (identificador, sem espaço)', value:c?.slug},
      {id:'f-color', label:'Cor (hex)', type:'color', value:c?.color||'#0B3D91'},
    ],
    onSave: async (v)=>{
      const payload = {label:v['f-label'], slug:v['f-slug'].toLowerCase().replace(/\s+/g,'-'), color:v['f-color']};
      if(c) await dbUpdate('categories', c.id, payload); else await dbInsert('categories', payload);
      closeDrawer(); await loadCategories(); renderContent();
    },
    onDelete: c ? async ()=>{ if(await dbDelete('categories', c.id)){ closeDrawer(); await loadCategories(); renderContent(); } } : null,
  });
}

/* ======================= MARCAS ======================= */
function Marcas(){
  const list = DB.brands || [];
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Marcas exibidas como filtro no catálogo do app.</p>
      <button class="btn btn-primary" onclick="openMarcaDrawer(null)">${ic.plus} Nova marca</button>
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>Marca</th><th>Destaque no app</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>
          ${list.map(b=>`
            <tr>
              <td style="font-weight:600">${b.name}</td>
              <td>${b.featured? `<span style="color:#047857;font-size:12px;font-weight:700;display:inline-flex;gap:4px;align-items:center">${ic.check} Sim</span>` : `<span class="muted" style="font-size:12px">Não</span>`}</td>
              <td style="text-align:right"><button class="icon-btn" onclick='openMarcaDrawer(${JSON.stringify(b)})'>${ic.pencil}</button></td>
            </tr>`).join('') || `<tr><td colspan="3" class="empty-td">${DB.brands===null?'Carregando...':'Nenhuma marca ainda.'}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
function openMarcaDrawer(b){
  openFormDrawer({
    title: b ? 'Editar marca' : 'Nova marca',
    fields: [
      {id:'f-name', label:'Nome', value:b?.name},
      {id:'f-featured', label:'Destaque no app', type:'checkbox', value:b?.featured||false},
    ],
    onSave: async (v)=>{
      const payload = {name:v['f-name'], featured:v['f-featured']};
      if(b) await dbUpdate('brands', b.id, payload); else await dbInsert('brands', payload);
      closeDrawer(); await loadBrands(); renderContent();
    },
    onDelete: b ? async ()=>{ if(await dbDelete('brands', b.id)){ closeDrawer(); await loadBrands(); renderContent(); } } : null,
  });
}

/* ======================= BANNERS ======================= */
function Banners(){
  const list = DB.banners || [];
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Controla os slides do carrossel na home do app.</p>
      <button class="btn btn-primary" onclick="openBannerDrawer(null)">${ic.plus} Novo banner</button>
    </div>
    <div class="grid grid-2">
      ${list.map(b=>`
        <div class="banner-card">
          <div class="banner-hero" style="background:${b.bg_css||'#111'}">
            <div class="eyebrow">${b.eyebrow||''}</div>
            <div class="title">${b.title}</div>
          </div>
          <div class="banner-foot">
            <span class="muted">Leva para: <b style="color:#3f3f46">${b.categories?.label||'—'}</b></span>
            <button class="icon-btn" onclick='openBannerDrawer(${JSON.stringify(b)})'>${ic.pencil}</button>
          </div>
        </div>`).join('') || `<p class="muted">${DB.banners===null?'Carregando...':'Nenhum banner ainda.'}</p>`}
    </div>
  `;
}
function openBannerDrawer(b){
  openFormDrawer({
    title: b ? 'Editar banner' : 'Novo banner',
    fields: [
      {id:'f-eyebrow', label:'Selo (texto pequeno acima)', value:b?.eyebrow},
      {id:'f-title', label:'Título', value:b?.title},
      {id:'f-bg', label:'Fundo (cor ou gradient CSS)', value:b?.bg_css||'linear-gradient(160deg,#0B3D91,#E5232A)'},
      {id:'f-cat', label:'Categoria de destino', type:'select', value:b?.category_id, options:(DB.categories||[]).map(c=>({value:c.id,label:c.label}))},
    ],
    onSave: async (v)=>{
      const payload = {eyebrow:v['f-eyebrow'], title:v['f-title'], bg_css:v['f-bg'], category_id:v['f-cat']||null};
      if(b) await dbUpdate('banners', b.id, payload); else await dbInsert('banners', payload);
      closeDrawer(); await loadBanners(); renderContent();
    },
    onDelete: b ? async ()=>{ if(await dbDelete('banners', b.id)){ closeDrawer(); await loadBanners(); renderContent(); } } : null,
  });
}

/* ======================= APARÊNCIA ======================= */
function Aparencia(){
  const a = DB.appearance || {primary_color:'#0B3D91', accent_color:'#E5232A', show_search_bar:true, center_logo:true, cep_modal_on_open:false};
  return `
    <div class="grid grid-2">
      <div>
        <div class="card" style="margin-bottom:16px">
          <h3>Identidade visual</h3>
          <div class="grid grid-2">
            <div class="field"><label>Cor principal</label>
              <div class="row-flex"><input type="color" id="c-primary" value="${a.primary_color}" style="width:36px;height:36px;padding:2px;border-radius:8px"/><input id="c-primary-text" value="${a.primary_color}" class="mono" style="flex:1"/></div>
            </div>
            <div class="field"><label>Cor de destaque</label>
              <div class="row-flex"><input type="color" id="c-accent" value="${a.accent_color}" style="width:36px;height:36px;padding:2px;border-radius:8px"/><input id="c-accent-text" value="${a.accent_color}" class="mono" style="flex:1"/></div>
            </div>
          </div>
        </div>
        <div class="card" style="margin-bottom:16px">
          <h3>Comportamento</h3>
          <div class="row-flex" style="justify-content:space-between;padding:6px 0;font-size:13px">Exibir busca fixa no topo<label class="toggle"><input type="checkbox" id="c-search" ${a.show_search_bar?'checked':''}/><span class="track"></span></label></div>
          <div class="row-flex" style="justify-content:space-between;padding:6px 0;font-size:13px">Modal de CEP na abertura do app<label class="toggle"><input type="checkbox" id="c-cep" ${a.cep_modal_on_open?'checked':''}/><span class="track"></span></label></div>
          <div class="row-flex" style="justify-content:space-between;padding:6px 0;font-size:13px">Centralizar logo<label class="toggle"><input type="checkbox" id="c-center" ${a.center_logo?'checked':''}/><span class="track"></span></label></div>
        </div>
        <button class="btn btn-primary" id="save-aparencia" style="width:100%;justify-content:center;padding:11px">Publicar alterações no app</button>
      </div>
      <div>
        <div class="phone">
          <div class="phone-bar" id="phone-bar" style="background:${a.primary_color}">Meinerz Esportes</div>
          <div class="phone-hero" id="phone-hero" style="background:linear-gradient(160deg, ${a.primary_color}, ${a.accent_color})">
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
  document.getElementById('save-aparencia').addEventListener('click', async ()=>{
    const payload = {
      primary_color: cpt.value, accent_color: cat.value,
      show_search_bar: document.getElementById('c-search').checked,
      cep_modal_on_open: document.getElementById('c-cep').checked,
      center_logo: document.getElementById('c-center').checked,
    };
    if(DB.appearance?.id) await dbUpdate('app_appearance', DB.appearance.id, payload);
    else await dbInsert('app_appearance', payload);
    await loadAppearance();
  });
}

/* ======================= PEDIDOS ======================= */
let orderFilter='all';
function Pedidos(){
  const statuses=['all','pendente','pago','enviado','entregue','cancelado'];
  const list = DB.orders || [];
  const filtered = list.filter(o=>orderFilter==='all'||o.status===orderFilter);
  return `
    <div class="filters" style="margin-bottom:14px">
      ${statuses.map(s=>`<button class="chip ${orderFilter===s?'active':''}" data-s="${s}">${s==='all'?'Todos':s}</button>`).join('')}
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>Pedido</th><th>Cliente</th><th>Pagamento</th><th>Total</th><th>Status</th></tr></thead>
        <tbody>
          ${filtered.length ? filtered.map(o=>`
            <tr>
              <td class="mono" style="font-size:11.5px;color:var(--muted)">${o.order_number}</td>
              <td style="font-weight:600">${o.clienteNome}</td>
              <td class="muted">${o.payment_method||'—'}</td>
              <td style="font-weight:700">${money(o.total)}</td>
              <td>
                <select data-order="${o.id}" class="order-status-select" style="font-size:12px;padding:4px 6px">
                  ${statuses.filter(s=>s!=='all').map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`).join('')}
                </select>
              </td>
            </tr>`).join('') : `<tr><td colspan="5" class="empty-td">${DB.orders===null?'Carregando...':'Nenhum pedido ainda.'}</td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}
function bindPedidosEvents(){
  document.querySelectorAll('.chip[data-s]').forEach(b=>b.addEventListener('click',()=>{orderFilter=b.dataset.s; renderContent();}));
  document.querySelectorAll('.order-status-select').forEach(sel=>{
    sel.addEventListener('change', async ()=>{
      await dbUpdate('orders', sel.dataset.order, {status:sel.value});
      await loadOrders(); renderContent();
    });
  });
}

/* ======================= CLIENTES ======================= */
let custQuery='';
function Clientes(){
  const list = DB.customers || [];
  const filtered = list.filter(c=>c.name.toLowerCase().includes(custQuery.toLowerCase()));
  return `
    <div class="toolbar">
      <div class="search-wrap">${ic.search}<input id="cust-search" placeholder="Buscar cliente..." value="${esc(custQuery)}"/></div>
      <button class="btn btn-primary" onclick="openCustomerDrawer(null)">${ic.plus} Novo cliente</button>
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>Cliente</th><th>Cidade</th><th>Perfil</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>
          ${filtered.length ? filtered.map(c=>`
            <tr>
              <td><div style="font-weight:600">${c.name}</div><div class="muted" style="font-size:11.5px">${c.email}</div></td>
              <td class="muted">${c.city||'—'}${c.state?'/'+c.state:''}</td>
              <td><span class="badge" style="background:${c.tag==='Recorrente'?'#eff6ff':c.tag==='Atacado'?'#faf5ff':'#ecfdf5'};color:${c.tag==='Recorrente'?'#1d4ed8':c.tag==='Atacado'?'#7e22ce':'#047857'}">${c.tag}</span></td>
              <td style="text-align:right"><button class="icon-btn" onclick='openCustomerDrawer(${JSON.stringify(c)})'>${ic.pencil}</button></td>
            </tr>`).join('') : `<tr><td colspan="4" class="empty-td">${DB.customers===null?'Carregando...':'Nenhum cliente ainda.'}</td></tr>`}
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
  openFormDrawer({
    title: c ? 'Editar cliente' : 'Novo cliente',
    fields: [
      {id:'f-name', label:'Nome', value:c?.name},
      {id:'f-email', label:'E-mail', value:c?.email},
      {id:'f-phone', label:'Telefone', value:c?.phone},
      {id:'f-city', label:'Cidade', value:c?.city},
      {id:'f-state', label:'Estado (UF)', value:c?.state},
      {id:'f-tag', label:'Perfil', type:'select', value:c?.tag||'Novo', options:[{value:'Novo',label:'Novo'},{value:'Recorrente',label:'Recorrente'},{value:'Atacado',label:'Atacado'}]},
    ],
    onSave: async (v)=>{
      const payload = {name:v['f-name'], email:v['f-email'], phone:v['f-phone'], city:v['f-city'], state:v['f-state'], tag:v['f-tag']};
      if(c) await dbUpdate('customers', c.id, payload); else await dbInsert('customers', payload);
      closeDrawer(); await loadCustomers(); renderContent();
    },
    onDelete: c ? async ()=>{ if(await dbDelete('customers', c.id)){ closeDrawer(); await loadCustomers(); renderContent(); } } : null,
  });
}

/* ======================= CUPONS ======================= */
function Cupons(){
  const list = DB.coupons || [];
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Cupons de desconto aplicáveis no checkout do app.</p>
      <button class="btn btn-primary" onclick="openCupomDrawer(null)">${ic.plus} Novo cupom</button>
    </div>
    <div class="table-card">
      <div class="divide">
        ${list.map(c=>`
          <div class="row-flex pad-row">
            <div class="mono" style="font-weight:800;background:var(--bg);border-radius:8px;padding:6px 12px;font-size:13px">${c.code}</div>
            <div style="flex:1"><div style="font-size:13px">${c.description||''}</div><div class="muted" style="font-size:11.5px">${c.used_count||0} usos${c.usage_limit?` de ${c.usage_limit}`:' · sem limite'}</div></div>
            ${badge(c.status)}
            <button class="icon-btn" onclick='openCupomDrawer(${JSON.stringify(c)})'>${ic.pencil}</button>
          </div>`).join('') || `<p class="muted pad-row">${DB.coupons===null?'Carregando...':'Nenhum cupom ainda.'}</p>`}
      </div>
    </div>
  `;
}
function openCupomDrawer(c){
  openFormDrawer({
    title: c ? 'Editar cupom' : 'Novo cupom',
    fields: [
      {id:'f-code', label:'Código', value:c?.code},
      {id:'f-desc', label:'Descrição', value:c?.description},
      {id:'f-type', label:'Tipo de desconto', type:'select', value:c?.discount_type||'percentual', options:[{value:'percentual',label:'Percentual (%)'},{value:'valor_fixo',label:'Valor fixo (R$)'},{value:'frete_gratis',label:'Frete grátis'}]},
      {id:'f-value', label:'Valor do desconto', type:'number', value:c?.discount_value},
      {id:'f-limit', label:'Limite de usos (vazio = sem limite)', type:'number', value:c?.usage_limit},
      {id:'f-status', label:'Status', type:'select', value:c?.status||'ativo', options:[{value:'ativo',label:'Ativo'},{value:'pausado',label:'Pausado'},{value:'expirado',label:'Expirado'}]},
    ],
    onSave: async (v)=>{
      const payload = {
        code:v['f-code'].toUpperCase(), description:v['f-desc'], discount_type:v['f-type'],
        discount_value:v['f-value']?Number(v['f-value']):null, usage_limit:v['f-limit']?Number(v['f-limit']):null,
        status:v['f-status'],
      };
      if(c) await dbUpdate('coupons', c.id, payload); else await dbInsert('coupons', payload);
      closeDrawer(); await loadCoupons(); renderContent();
    },
    onDelete: c ? async ()=>{ if(await dbDelete('coupons', c.id)){ closeDrawer(); await loadCoupons(); renderContent(); } } : null,
  });
}

/* ======================= FRETE & PAGAMENTO ======================= */
function Frete(){
  const zones = DB.shippingZones || [];
  const pays = DB.paymentMethods || [];
  return `
    <div class="toolbar"><h3 style="display:flex;align-items:center;gap:8px;margin:0">${ic.truck} Zonas de entrega</h3>
      <button class="btn btn-primary" onclick="openZonaDrawer(null)">${ic.plus} Nova zona</button>
    </div>
    <div class="table-card" style="margin-bottom:24px">
      <table>
        <thead><tr><th>Região</th><th>Prazo</th><th>Frete</th><th>Método</th><th style="text-align:right">Ações</th></tr></thead>
        <tbody>
          ${zones.map(z=>`
            <tr>
              <td style="font-weight:600">${z.region_name}</td>
              <td class="muted">${z.prazo_min}-${z.prazo_max} dias úteis</td>
              <td>${z.price_type==='gratis'?'Grátis':z.price_type==='fixo'?money(z.price_value):'Calculado por CEP'}</td>
              <td class="muted">${z.method||'—'}</td>
              <td style="text-align:right"><button class="icon-btn" onclick='openZonaDrawer(${JSON.stringify(z)})'>${ic.pencil}</button></td>
            </tr>`).join('') || `<tr><td colspan="5" class="empty-td">Nenhuma zona cadastrada.</td></tr>`}
        </tbody>
      </table>
    </div>
    <h3 style="display:flex;align-items:center;gap:8px;margin-bottom:12px">💳 Formas de pagamento</h3>
    <div class="table-card">
      <div class="divide">
        ${pays.map(m=>`
          <div class="row-flex pad-row">
            <div style="flex:1"><div style="font-weight:600;font-size:13px">${m.name}</div><div class="muted" style="font-size:11.5px">Gateway: ${m.gateway||'—'} · Taxa: ${m.fee_desc||'—'}</div></div>
            ${badge(m.status)}
            <label class="toggle"><input type="checkbox" data-pay="${m.id}" class="pay-toggle" ${m.status==='ativo'?'checked':''}/><span class="track"></span></label>
          </div>`).join('') || `<p class="muted pad-row">Nenhuma forma de pagamento cadastrada.</p>`}
      </div>
    </div>
  `;
}
function bindFreteEvents(){
  document.querySelectorAll('.pay-toggle').forEach(t=>{
    t.addEventListener('change', async ()=>{
      await dbUpdate('payment_methods', t.dataset.pay, {status: t.checked?'ativo':'pausado'});
      await loadPayments(); renderContent();
    });
  });
}
function openZonaDrawer(z){
  openFormDrawer({
    title: z ? 'Editar zona de entrega' : 'Nova zona de entrega',
    fields: [
      {id:'f-region', label:'Região', value:z?.region_name},
      {id:'f-min', label:'Prazo mínimo (dias)', type:'number', value:z?.prazo_min},
      {id:'f-max', label:'Prazo máximo (dias)', type:'number', value:z?.prazo_max},
      {id:'f-type', label:'Tipo de frete', type:'select', value:z?.price_type||'calculado', options:[{value:'gratis',label:'Grátis'},{value:'fixo',label:'Valor fixo'},{value:'calculado',label:'Calculado por CEP'}]},
      {id:'f-price', label:'Valor (se fixo)', type:'number', value:z?.price_value},
      {id:'f-method', label:'Método', value:z?.method},
    ],
    onSave: async (v)=>{
      const payload = {region_name:v['f-region'], prazo_min:Number(v['f-min'])||1, prazo_max:Number(v['f-max'])||1, price_type:v['f-type'], price_value:v['f-price']?Number(v['f-price']):null, method:v['f-method']};
      if(z) await dbUpdate('shipping_zones', z.id, payload); else await dbInsert('shipping_zones', payload);
      closeDrawer(); await loadShipping(); renderContent();
    },
    onDelete: z ? async ()=>{ if(await dbDelete('shipping_zones', z.id)){ closeDrawer(); await loadShipping(); renderContent(); } } : null,
  });
}

/* ======================= FISCAL ======================= */
function Fiscal(){
  const f = DB.fiscal || {regime:'Simples Nacional', nfe_mode:'Automática', cfop_default:'5.102', ambiente:'Homologação'};
  const invoices = DB.invoices || [];
  return `
    <div class="callout" style="margin-bottom:18px">${ic.alert} Alterações fiscais afetam a emissão de nota em pedidos futuros. Confirme com o contador antes de salvar.</div>
    <div class="card" style="margin-bottom:18px">
      <h3>Configuração fiscal</h3>
      <div class="grid grid-2">
        <div class="field"><label>Regime tributário</label><select id="f-regime">
          ${['Simples Nacional','Lucro Presumido','Lucro Real'].map(o=>`<option ${f.regime===o?'selected':''}>${o}</option>`).join('')}
        </select></div>
        <div class="field"><label>Emissão de NF-e</label><select id="f-nfe">
          ${['Automática','Manual','Desativada'].map(o=>`<option ${f.nfe_mode===o?'selected':''}>${o}</option>`).join('')}
        </select></div>
        <div class="field"><label>CFOP padrão</label><input id="f-cfop" value="${esc(f.cfop_default)}"/></div>
        <div class="field"><label>Ambiente</label><select id="f-amb">
          ${['Produção','Homologação'].map(o=>`<option ${f.ambiente===o?'selected':''}>${o}</option>`).join('')}
        </select></div>
      </div>
      <button class="btn btn-primary" id="save-fiscal">Salvar configuração</button>
    </div>
    <div class="card">
      <h3>Últimas notas emitidas</h3>
      <div class="divide">
        ${invoices.map(n=>`
          <div class="row-flex" style="justify-content:space-between;padding:9px 0;font-size:13px">
            <span class="mono" style="color:var(--muted)">${n.orders?.order_number||'—'}</span>
            <span>${n.nfe_number||'—'}</span>
            ${badge(n.status==='autorizada'?'pago':n.status)}
          </div>`).join('') || `<p class="muted" style="font-size:13px">Nenhuma nota emitida ainda.</p>`}
      </div>
    </div>
  `;
}
function bindFiscalEvents(){
  const btn = document.getElementById('save-fiscal');
  if(!btn) return;
  btn.addEventListener('click', async ()=>{
    const payload = {
      regime: document.getElementById('f-regime').value,
      nfe_mode: document.getElementById('f-nfe').value,
      cfop_default: document.getElementById('f-cfop').value,
      ambiente: document.getElementById('f-amb').value,
    };
    if(DB.fiscal?.id) await dbUpdate('fiscal_config', DB.fiscal.id, payload); else await dbInsert('fiscal_config', payload);
    await loadFiscal(); renderContent();
  });
}

/* ======================= INTEGRAÇÕES ======================= */
function Integracoes(){
  const list = DB.integrations || [];
  return `
    <div class="toolbar"><p class="muted" style="font-size:13px">Status das integrações do app.</p>
      <button class="btn btn-primary" onclick="openIntegracaoDrawer(null)">${ic.plus} Nova integração</button>
    </div>
    <div class="table-card">
      <div class="divide">
        ${list.map(i=>`
          <div class="row-flex pad-row">
            <div style="flex:1"><div style="font-weight:600;font-size:13px">${i.name}</div><div class="muted" style="font-size:11.5px">${i.description||''}</div></div>
            ${badge(i.status)}
            <button class="btn-outline btn" style="padding:6px 12px;font-size:12px" onclick='openIntegracaoDrawer(${JSON.stringify(i)})'>Configurar</button>
          </div>`).join('') || `<p class="muted pad-row">${DB.integrations===null?'Carregando...':'Nenhuma integração cadastrada.'}</p>`}
      </div>
    </div>
  `;
}
function openIntegracaoDrawer(i){
  openFormDrawer({
    title: i ? 'Editar integração' : 'Nova integração',
    fields: [
      {id:'f-name', label:'Nome', value:i?.name},
      {id:'f-desc', label:'Descrição', value:i?.description},
      {id:'f-status', label:'Status', type:'select', value:i?.status||'desconectado', options:[{value:'conectado',label:'Conectado'},{value:'atenção',label:'Atenção'},{value:'desconectado',label:'Desconectado'}]},
    ],
    onSave: async (v)=>{
      const payload = {name:v['f-name'], description:v['f-desc'], status:v['f-status']};
      if(i) await dbUpdate('integrations', i.id, payload); else await dbInsert('integrations', payload);
      closeDrawer(); await loadIntegrations(); renderContent();
    },
    onDelete: i ? async ()=>{ if(await dbDelete('integrations', i.id)){ closeDrawer(); await loadIntegrations(); renderContent(); } } : null,
  });
}

/* ======================= RELATÓRIOS ======================= */
function Relatorios(){
  const orders = DB.orders || [];
  const now = new Date();
  const months = [];
  for(let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push({key:`${d.getFullYear()}-${d.getMonth()}`, label:d.toLocaleDateString('pt-BR',{month:'short',year:'2-digit'}), vendas:0});
  }
  orders.forEach(o=>{
    const d = new Date(o.created_at);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const m = months.find(m=>m.key===key);
    if(m) m.vendas += Number(o.total||0);
  });
  const max = Math.max(1, ...months.map(m=>m.vendas));

  return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:14px">
      <button class="btn btn-outline" id="export-csv">${ic.download} Exportar CSV</button>
    </div>
    <div class="card" style="margin-bottom:18px">
      <h3>Vendas por mês</h3>
      <div class="bars">
        ${months.map(m=>`
          <div class="bar-col">
            <div class="val">${(m.vendas/1000).toFixed(1)}k</div>
            <div class="bar" style="height:${(m.vendas/max)*100}%"></div>
            <div class="lbl">${m.label}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3>Pedidos no período</h3>
      <p class="muted" style="font-size:13px">${orders.length} pedidos no total, somando ${money(orders.reduce((s,o)=>s+Number(o.total||0),0))}.</p>
    </div>
  `;
}
function bindRelatoriosEvents(){
  const btn = document.getElementById('export-csv');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    const orders = DB.orders || [];
    const rows = [['Pedido','Cliente','Status','Total','Data'], ...orders.map(o=>[o.order_number,o.clienteNome,o.status,o.total,o.created_at])];
    const csv = rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'pedidos.csv'; a.click();
    URL.revokeObjectURL(url);
  });
}

/* ======================= EQUIPE ======================= */
function Equipe(){
  const list = DB.team || [];
  return `
    <div class="toolbar">
      <p class="muted" style="font-size:13px">Quem pode entrar no painel. Pra dar acesso de verdade, crie o login em Authentication → Users no Supabase e depois vincule aqui.</p>
      <button class="btn btn-primary" onclick="openEquipeDrawer(null)">${ic.plus} Adicionar pessoa</button>
    </div>
    <div class="table-card">
      <div class="divide">
        ${list.map(t=>`
          <div class="row-flex pad-row">
            <div class="avatar blue" style="width:36px;height:36px;font-size:12px">${initials(t.name)}</div>
            <div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">${t.name}</div><div class="muted" style="font-size:11.5px">${t.email}</div></div>
            <div class="muted" style="font-size:12px">${t.access_notes||''}</div>
            <span class="badge" style="background:#eff6ff;color:#1d4ed8">${t.role}</span>
            <button class="icon-btn" onclick='openEquipeDrawer(${JSON.stringify(t)})'>${ic.pencil}</button>
          </div>`).join('') || `<p class="muted pad-row">${DB.team===null?'Carregando...':'Nenhuma pessoa cadastrada ainda.'}</p>`}
      </div>
    </div>
  `;
}
function openEquipeDrawer(t){
  openFormDrawer({
    title: t ? 'Editar pessoa' : 'Adicionar pessoa',
    fields: [
      {id:'f-name', label:'Nome', value:t?.name},
      {id:'f-email', label:'E-mail (precisa já existir em Authentication → Users)', value:t?.email},
      {id:'f-role', label:'Função', type:'select', value:t?.role||'Estoque', options:[{value:'Admin',label:'Admin'},{value:'Marketing',label:'Marketing'},{value:'Estoque',label:'Estoque'},{value:'Financeiro',label:'Financeiro'}]},
      {id:'f-notes', label:'O que pode mexer (texto livre)', value:t?.access_notes},
    ],
    onSave: async (v)=>{
      const payload = {name:v['f-name'], email:v['f-email'], role:v['f-role'], access_notes:v['f-notes']};
      if(t) await dbUpdate('team_members', t.id, payload); else await dbInsert('team_members', payload);
      closeDrawer(); await loadTeam(); renderContent();
    },
    onDelete: t ? async ()=>{ if(await dbDelete('team_members', t.id)){ closeDrawer(); await loadTeam(); renderContent(); } } : null,
  });
}

/* ======================= ROUTER ======================= */
const SECTIONS = {
  dashboard:Dashboard, produtos:Produtos, categorias:Categorias, marcas:Marcas, banners:Banners,
  aparencia:Aparencia, pedidos:Pedidos, clientes:Clientes, cupons:Cupons, frete:Frete,
  fiscal:Fiscal, integracoes:Integracoes, relatorios:Relatorios, equipe:Equipe,
};
const POST_RENDER = {
  produtos:bindProdutosEvents, pedidos:bindPedidosEvents, clientes:bindClientesEvents,
  aparencia:bindAparenciaEvents, frete:bindFreteEvents, fiscal:bindFiscalEvents, relatorios:bindRelatoriosEvents,
};

let active = 'dashboard';
function renderNav(){
  const el = document.getElementById('nav');
  el.innerHTML = NAV.map(g => `
    <div class="nav-group-label">${g.group}</div>
    ${g.items.map(n => `<button data-id="${n.id}" class="${active===n.id?'active':''}">${ic[n.icon]} ${n.label} <span class="dot"></span></button>`).join('')}
  `).join('');
  el.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setActive(b.dataset.id)));
}
async function setActive(id){
  active = id;
  renderNav();
  document.getElementById('content').innerHTML = `<p class="muted">Carregando...</p>`;
  if(LOADERS[id]) await LOADERS[id]();
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

/* ======================= AUTENTICAÇÃO ======================= */
async function boot(){
  const { data: { session } } = await supabaseClient.auth.getSession();
  if(session){ showApp(session); } else { showLogin(); }

  supabaseClient.auth.onAuthStateChange((event, session)=>{
    if(event === 'SIGNED_IN') showApp(session);
    if(event === 'SIGNED_OUT') showLogin();
  });
}

function showLogin(){
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app-screen').style.display = 'none';
}

async function showApp(session){
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-screen').style.display = 'flex';

  document.getElementById('overlay').addEventListener('click', closeDrawer);
  document.getElementById('logout-btn').addEventListener('click', async ()=>{
    await supabaseClient.auth.signOut();
  });

  const email = session.user.email;
  document.getElementById('user-email').textContent = email;
  document.getElementById('user-avatar').textContent = initials(email.split('@')[0].replace('.',' '));

  renderNav();
  await setActive('dashboard');
}

document.getElementById('login-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const btn = document.getElementById('login-btn');
  const errBox = document.getElementById('login-error');
  errBox.style.display = 'none';
  btn.disabled = true; btn.textContent = 'Entrando...';
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  btn.disabled = false; btn.textContent = 'Entrar';
  if(error){ errBox.textContent = 'E-mail ou senha incorretos.'; errBox.style.display = 'block'; }
});

boot();