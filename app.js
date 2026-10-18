/**
 * TiendaControl PRO - Sistema Integral de Punto de Venta y Administración de Abarrotes
 * Diseñado específicamente para móviles y computadoras en comercios mexicanos.
 */

// ==========================================================================
// 1. DATOS INICIALES Y SEMILLA DE PRODUCTOS MEXICANOS
// ==========================================================================
const DEFAULT_PRODUCTS = [
  // Bebidas
  { id: 'prod_1', barcode: '7501055300075', name: 'Coca-Cola Original 600ml', category: 'Bebidas', unit: 'pza', cost: 14.50, price: 19.00, stock: 24, minStock: 6 },
  { id: 'prod_2', barcode: '7501055310883', name: 'Coca-Cola 3 Litros No Retornable', category: 'Bebidas', unit: 'pza', cost: 39.00, price: 49.00, stock: 12, minStock: 4 },
  { id: 'prod_3', barcode: '7501031311309', name: 'Pepsi 600ml Pet', category: 'Bebidas', unit: 'pza', cost: 12.00, price: 17.00, stock: 18, minStock: 5 },
  { id: 'prod_4', barcode: '7501020512108', name: 'Peñafiel Agua Mineral Limón 600ml', category: 'Bebidas', unit: 'pza', cost: 13.00, price: 18.00, stock: 15, minStock: 4 },
  { id: 'prod_5', barcode: '7501055320578', name: 'Agua Purificada Ciel 1 Litro', category: 'Bebidas', unit: 'pza', cost: 9.00, price: 14.00, stock: 20, minStock: 6 },
  { id: 'prod_6', barcode: '7501055365418', name: 'Jugo Del Valle Durazno 413ml', category: 'Bebidas', unit: 'pza', cost: 14.00, price: 19.00, stock: 10, minStock: 3 },
  { id: 'prod_7', barcode: '7501071101038', name: 'Electrolit Coco 625ml', category: 'Bebidas', unit: 'pza', cost: 28.00, price: 36.00, stock: 14, minStock: 4 },
  { id: 'prod_8', barcode: '7501011115202', name: 'Jarritos Mandarina 2 Litros', category: 'Bebidas', unit: 'pza', cost: 22.00, price: 29.00, stock: 10, minStock: 3 },

  // Botanas
  { id: 'prod_9', barcode: '7501011115684', name: 'Papas Sabritas Sal 45g', category: 'Botanas', unit: 'pza', cost: 15.50, price: 21.00, stock: 20, minStock: 6 },
  { id: 'prod_10', barcode: '7501011131073', name: 'Doritos Nacho 58g', category: 'Botanas', unit: 'pza', cost: 16.00, price: 22.00, stock: 18, minStock: 5 },
  { id: 'prod_11', barcode: '7501011143892', name: 'Ruffles con Queso 50g', category: 'Botanas', unit: 'pza', cost: 16.00, price: 22.00, stock: 14, minStock: 4 },
  { id: 'prod_12', barcode: '7501011103520', name: 'Cheetos Torciditos 48g', category: 'Botanas', unit: 'pza', cost: 12.50, price: 17.00, stock: 22, minStock: 6 },
  { id: 'prod_13', barcode: '7501000153107', name: 'Takis Fuego Barcel 62g', category: 'Botanas', unit: 'pza', cost: 15.00, price: 21.00, stock: 25, minStock: 6 },
  { id: 'prod_14', barcode: '7501000111220', name: 'Cacahuates Japoneses Karate 50g', category: 'Botanas', unit: 'pza', cost: 9.50, price: 14.00, stock: 16, minStock: 4 },

  // Panadería y Galletas
  { id: 'prod_15', barcode: '7501000111145', name: 'Pan Blanco Bimbo Grande 680g', category: 'Panadería', unit: 'pza', cost: 38.00, price: 47.00, stock: 8, minStock: 3, expDate: '2026-10-22' },
  { id: 'prod_16', barcode: '7501000112449', name: 'Donas Bimbo Espolvoreadas 105g', category: 'Panadería', unit: 'pza', cost: 18.50, price: 25.00, stock: 12, minStock: 3, expDate: '2026-10-20' },
  { id: 'prod_17', barcode: '7501000111305', name: 'Medias Noches Bimbo 8 pzas', category: 'Panadería', unit: 'paq', cost: 32.00, price: 42.00, stock: 7, minStock: 2 },
  { id: 'prod_18', barcode: '7501000121113', name: 'Galletas Marías Gamesa 170g', category: 'Panadería', unit: 'paq', cost: 15.00, price: 21.00, stock: 15, minStock: 4 },
  { id: 'prod_19', barcode: '7501000122229', name: 'Galletas Emperador Chocolate 101g', category: 'Panadería', unit: 'paq', cost: 16.50, price: 23.00, stock: 18, minStock: 5 },
  { id: 'prod_20', barcode: '7501000123335', name: 'Galletas Chokis Gamesa 84g', category: 'Panadería', unit: 'paq', cost: 16.50, price: 23.00, stock: 14, minStock: 4 },

  // Lácteos y Huevos
  { id: 'prod_21', barcode: '7501020511118', name: 'Leche Lala Entera 1 Litro', category: 'Lácteos', unit: 'lt', cost: 23.50, price: 29.00, stock: 24, minStock: 6, expDate: '2026-10-21' },
  { id: 'prod_22', barcode: '7501020522223', name: 'Leche Nutri 1 Litro', category: 'Lácteos', unit: 'lt', cost: 17.00, price: 22.00, stock: 20, minStock: 6 },
  { id: 'prod_23', barcode: '7501008011119', name: 'Crema Alpura Clásica 200ml', category: 'Lácteos', unit: 'pza', cost: 15.00, price: 20.00, stock: 12, minStock: 3 },
  { id: 'prod_24', barcode: '7501008022221', name: 'Queso Panela La Villita 400g', category: 'Lácteos', unit: 'pza', cost: 31.00, price: 42.00, stock: 6, minStock: 2 },
  { id: 'prod_25', barcode: '7501032398415', name: 'Huevo Blanco San Juan por Kilo', category: 'Granel', unit: 'kg', cost: 36.00, price: 46.00, stock: 30, minStock: 8 },

  // Abarrotes y Despensa
  { id: 'prod_26', barcode: '7501018311119', name: 'Aceite Comestible 1-2-3 1 Litro', category: 'Abarrotes', unit: 'pza', cost: 35.00, price: 44.00, stock: 14, minStock: 4 },
  { id: 'prod_27', barcode: '7501018322221', name: 'Arroz Súper Extra Verde Valle 1kg', category: 'Abarrotes', unit: 'kg', cost: 28.00, price: 36.00, stock: 16, minStock: 4 },
  { id: 'prod_28', barcode: '7501017004319', name: 'Frijoles Refritos La Costeña 580g', category: 'Abarrotes', unit: 'pza', cost: 18.00, price: 25.00, stock: 15, minStock: 4 },
  { id: 'prod_29', barcode: '7501045401112', name: 'Atún Dolores en Agua 140g', category: 'Abarrotes', unit: 'pza', cost: 16.50, price: 23.00, stock: 20, minStock: 5 },
  { id: 'prod_30', barcode: '7501005111119', name: 'Mayonesa McCormick con Limón 390g', category: 'Abarrotes', unit: 'pza', cost: 31.00, price: 41.00, stock: 10, minStock: 3 },
  { id: 'prod_31', barcode: '7501014111119', name: 'Pasta La Moderna Espagueti 200g', category: 'Abarrotes', unit: 'paq', cost: 8.00, price: 12.00, stock: 35, minStock: 10 },
  { id: 'prod_32', barcode: '7501024511114', name: 'Salsa Picante Valentina Amarilla 370ml', category: 'Abarrotes', unit: 'pza', cost: 12.00, price: 17.50, stock: 18, minStock: 4 },
  { id: 'prod_33', barcode: '7501001111115', name: 'Tortillas de Maíz Calientitas kg', category: 'Granel', unit: 'kg', cost: 18.00, price: 24.00, stock: 25, minStock: 5 },
  { id: 'prod_34', barcode: '7501002222228', name: 'Azúcar Estándar por Kilo', category: 'Granel', unit: 'kg', cost: 23.00, price: 30.00, stock: 20, minStock: 5 },

  // Limpieza del Hogar
  { id: 'prod_35', barcode: '7501026011117', name: 'Jabón Zote Rosa Barra 400g', category: 'Limpieza', unit: 'pza', cost: 19.50, price: 26.00, stock: 22, minStock: 5 },
  { id: 'prod_36', barcode: '7501026022229', name: 'Detergente en Polvo Ariel 1kg', category: 'Limpieza', unit: 'pza', cost: 36.00, price: 46.00, stock: 12, minStock: 3 },
  { id: 'prod_37', barcode: '7501026033332', name: 'Cloro Cloralex El Rendidor 950ml', category: 'Limpieza', unit: 'pza', cost: 14.00, price: 19.50, stock: 16, minStock: 4 },
  { id: 'prod_38', barcode: '7501026044445', name: 'Papel Higiénico Pétalo 4 Rollos', category: 'Limpieza', unit: 'paq', cost: 28.00, price: 38.00, stock: 14, minStock: 4 },
  { id: 'prod_39', barcode: '7501026055558', name: 'Limpiador Líquido Fabuloso Lavanda 1L', category: 'Limpieza', unit: 'pza', cost: 19.00, price: 26.50, stock: 15, minStock: 4 }
];

const DEFAULT_SUPPLIERS = [
  {
    id: 'supp_1',
    company: 'Coca-Cola FEMSA',
    contact: 'Carlos Méndez (Preventista)',
    phone: '5541238910',
    visitDay: 'Lunes',
    notes: 'Pasa a las 10:00 am. Pedido mínimo 5 cajas de retornable o pet.'
  },
  {
    id: 'supp_2',
    company: 'Grupo Bimbo',
    contact: 'Raúl Salazar (Repartidor)',
    phone: '5558912344',
    visitDay: 'Martes',
    notes: 'Cambio de pan frío sin costo. Checar fechas de caducidad.'
  },
  {
    id: 'supp_3',
    company: 'Sabritas / PepsiCo',
    contact: 'Jorge Ortiz',
    phone: '5519283746',
    visitDay: 'Miércoles',
    notes: 'Acomoda exhibidores y deja tiras de cacahuates y papas.'
  },
  {
    id: 'supp_4',
    company: 'Grupo Lala',
    contact: 'Marco Antonio Morales',
    phone: '5528374619',
    visitDay: 'Jueves',
    notes: 'Surtido de leche entera, deslactosada, quesos y cremas.'
  },
  {
    id: 'supp_5',
    company: 'Abarrotes La Guadalupana (Mayorista)',
    contact: 'Sra. Patricia Flores',
    phone: '5537461928',
    visitDay: 'Semanal',
    notes: 'Granel: arroz, frijol, azúcar y huevo al mayoreo.'
  }
];

const DEFAULT_CUSTOMERS = [
  {
    id: 'cust_1',
    name: 'Doña Mary (Vecina esquina)',
    phone: '5511223344',
    limit: 1200,
    debt: 245.50,
    address: 'Casa verde de dos pisos portón negro',
    lastPaymentDate: '2026-10-15'
  },
  {
    id: 'cust_2',
    name: 'Don Beto (Taller Mecánico)',
    phone: '5599887766',
    limit: 1800,
    debt: 520.00,
    address: 'Frente al parque, portón amarillo',
    lastPaymentDate: '2026-10-12'
  },
  {
    id: 'cust_3',
    name: 'Sra. Lupita (Costurera)',
    phone: '5544332211',
    limit: 900,
    debt: 115.00,
    address: 'Calle Hidalgo #14',
    lastPaymentDate: '2026-10-16'
  }
];

// ==========================================================================
// 2. CLASE PRINCIPAL DE LA APLICACIÓN
// ==========================================================================
class TiendaControlApp {
  constructor() {
    this.storageKey = 'tiendacontrol_pro_db_v1';
    this.cart = []; // [{ product, qty, subtotal }]
    this.currentView = 'viewPos';
    this.selectedCategory = 'all';
    this.searchQuery = '';
    this.selectedPaymentMethod = 'efectivo';
    this.creditTransType = 'payment'; // 'payment' o 'charge'
    this.currentDebtorForTrans = null;
    this.scannerStream = null;

    this.initAudio();
    this.loadDatabase();
    this.initUI();
    this.registerServiceWorker();
  }

  // Sintetizador de audio nativo (bips para ventas y lecturas)
  initAudio() {
    try {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      this.audioCtx = null;
    }
  }

  playBeep(frequency = 880, duration = 0.1, type = 'sine') {
    if (!this.audioCtx) return;
    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {}
  }

  // Carga o inicializa la base de datos local
  loadDatabase() {
    const raw = localStorage.getItem(this.storageKey);
    const todayStr = new Date().toISOString().split('T')[0];

    if (raw) {
      try {
        this.db = JSON.parse(raw);
        // Asegurar estructura
        if (!this.db.products) this.db.products = DEFAULT_PRODUCTS;
        if (!this.db.suppliers) this.db.suppliers = DEFAULT_SUPPLIERS;
        if (!this.db.customers) this.db.customers = DEFAULT_CUSTOMERS;
        if (!this.db.sales) this.db.sales = [];
        if (!this.db.cashMovements) this.db.cashMovements = [];
        if (!this.db.purchases) this.db.purchases = [];
        if (!this.db.wastes) this.db.wastes = [];
        if (!this.db.license) {
          const randNum1 = Math.floor(1000 + Math.random() * 9000);
          const randNum2 = Math.floor(1000 + Math.random() * 9000);
          this.db.license = {
            isActivated: false,
            storeId: `TC-${randNum1}-${randNum2}`,
            installTimestamp: Date.now(),
            activationKey: null,
            activatedAt: null
          };
        }
        if (!this.db.currentShift) {
          this.db.currentShift = { id: 'shift_1', name: 'Turno Mañana', cashier: 'Encargado Principal', startedAt: new Date().toISOString() };
        }
        if (!this.db.shiftHistory) this.db.shiftHistory = [];
        if (!this.db.cash) {
          this.db.cash = {
            date: todayStr,
            initialFund: 500.00,
            status: 'open'
          };
        }
      } catch (e) {
        this.initDefaultDatabase();
      }
    } else {
      this.initDefaultDatabase();
    }
  }

  initDefaultDatabase() {
    const todayStr = new Date().toISOString().split('T')[0];
    this.db = {
      version: '1.0',
      storeName: 'Mi Tienda',
      products: JSON.parse(JSON.stringify(DEFAULT_PRODUCTS)),
      suppliers: JSON.parse(JSON.stringify(DEFAULT_SUPPLIERS)),
      customers: JSON.parse(JSON.stringify(DEFAULT_CUSTOMERS)),
      sales: [],
      cashMovements: [],
      cash: {
        date: todayStr,
        initialFund: 500.00,
        status: 'open'
      }
    };
    this.saveDatabase();
  }

  saveDatabase() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.db));
    this.updateBadges();
  }

  // ==========================================================================
  // 3. INICIALIZACIÓN DE LA INTERFAZ Y EVENTOS
  // ==========================================================================
  initUI() {
    // Navegación Inferior
    document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetView = btn.getAttribute('data-view');
        this.switchView(targetView);
      });
    });

    // Buscador POS
    const posSearchInput = document.getElementById('posSearchInput');
    const posSearchClear = document.getElementById('posSearchClear');
    if (posSearchInput) {
      posSearchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim().toLowerCase();
        posSearchClear.style.display = this.searchQuery ? 'block' : 'none';
        this.renderPosProducts();
      });
      // Atajo Enter para código de barras rápido
      posSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = posSearchInput.value.trim();
          const match = this.db.products.find(p => p.barcode && p.barcode === val);
          if (match) {
            this.addToCart(match.id);
            posSearchInput.value = '';
            this.searchQuery = '';
            posSearchClear.style.display = 'none';
            this.renderPosProducts();
          }
        }
      });
    }
    if (posSearchClear) {
      posSearchClear.addEventListener('click', () => {
        posSearchInput.value = '';
        this.searchQuery = '';
        posSearchClear.style.display = 'none';
        posSearchInput.focus();
        this.renderPosProducts();
      });
    }

    // Botones de Vaciar y Cobrar Carrito
    document.getElementById('btnClearCart')?.addEventListener('click', () => this.clearCart());
    document.getElementById('btnCheckout')?.addEventListener('click', () => this.openCheckoutModal());
    document.getElementById('mobileCartFloat')?.addEventListener('click', () => this.openCheckoutModal());

    // Botones Rápidos del Encabezado
    document.getElementById('btnHeaderScanner')?.addEventListener('click', () => this.openScanner());
    document.getElementById('btnHeaderExpense')?.addEventListener('click', () => this.openCashMovementModal('expense'));

    // Inventario: Buscador y Filtro
    document.getElementById('invSearchInput')?.addEventListener('input', () => this.renderInventoryTable());
    document.getElementById('invCategoryFilter')?.addEventListener('change', () => this.renderInventoryTable());
    document.getElementById('btnOpenNewProductModal')?.addEventListener('click', () => this.openProductModal());

    // Fiados: Buscador y Nuevo Cliente
    document.getElementById('creditSearchInput')?.addEventListener('input', () => this.renderCreditCustomers());
    document.getElementById('btnOpenNewCustomerModal')?.addEventListener('click', () => this.openCustomerModal());

    // Proveedores: Nuevo Proveedor y Recepción de Mercancía
    document.getElementById('btnOpenNewSupplierModal')?.addEventListener('click', () => this.openSupplierModal());
    document.getElementById('btnOpenRestockModal')?.addEventListener('click', () => this.openRestockModal());

    // Venta Libre / Rápida
    document.getElementById('btnOpenQuickSaleModal')?.addEventListener('click', () => this.openQuickSaleModal());

    // Caducidades & Mermas
    document.getElementById('btnOpenExpirationsModal')?.addEventListener('click', () => this.openExpirationsModal());

    // Cambio de Turno en Encabezado
    document.getElementById('btnHeaderShift')?.addEventListener('click', () => this.openShiftChangeModal());

    // Eventos Calculadora Báscula
    document.getElementById('bulkInputMoney')?.addEventListener('input', () => this.recalculateBulk());
    document.getElementById('bulkInputWeight')?.addEventListener('input', () => this.recalculateBulk());

    // Eventos Recepción de Mercancía
    document.getElementById('restockQty')?.addEventListener('input', () => this.recalculateRestockTotal());
    document.getElementById('restockCost')?.addEventListener('input', () => this.recalculateRestockTotal());
    document.getElementById('restockProductSelect')?.addEventListener('change', (e) => {
      const prod = this.db.products.find(p => p.id === e.target.value);
      if (prod) {
        document.getElementById('restockCost').value = prod.cost.toFixed(2);
        this.recalculateRestockTotal();
      }
    });

    // Caja: Botones de Fondo, Gasto, Corte, Respaldo
    document.getElementById('btnSetInitialFund')?.addEventListener('click', () => this.promptInitialFund());
    document.getElementById('btnRegisterExpenseModal')?.addEventListener('click', () => this.openCashMovementModal('expense'));
    document.getElementById('btnPerformCashCut')?.addEventListener('click', () => this.generateCashCutSummary());
    document.getElementById('btnExportBackup')?.addEventListener('click', () => this.exportBackup());
    document.getElementById('inputRestoreBackup')?.addEventListener('change', (e) => this.importBackup(e));
    document.getElementById('btnResetFactoryDefaults')?.addEventListener('click', () => this.resetFactoryDefaults());

    // Modal Cobro: Métodos de Pago
    document.querySelectorAll('#paymentMethodButtonGroup .method-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#paymentMethodButtonGroup .method-btn').forEach(b => {
          b.classList.remove('btn-primary', 'active');
          b.classList.add('btn-secondary');
        });
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary', 'active');

        this.selectedPaymentMethod = btn.getAttribute('data-method');
        const sectionCash = document.getElementById('sectionCashPayment');
        const sectionCredit = document.getElementById('sectionCreditPayment');

        if (this.selectedPaymentMethod === 'efectivo') {
          sectionCash.style.display = 'block';
          sectionCredit.style.display = 'none';
        } else if (this.selectedPaymentMethod === 'fiado') {
          sectionCash.style.display = 'none';
          sectionCredit.style.display = 'block';
          this.populateCreditCustomersSelect();
        } else {
          sectionCash.style.display = 'none';
          sectionCredit.style.display = 'none';
        }
      });
    });

    // Billetes rápidos de pago en efectivo
    document.querySelectorAll('.quick-bills-grid .btn-bill').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.getAttribute('data-amount');
        const total = this.getCartTotal();
        const input = document.getElementById('inputCashReceived');

        if (val === 'exact') {
          input.value = total.toFixed(2);
        } else if (val === 'clear') {
          input.value = '';
        } else {
          const bill = parseFloat(val);
          input.value = bill.toFixed(2);
        }
        this.calculateCashChange();
      });
    });

    document.getElementById('inputCashReceived')?.addEventListener('input', () => this.calculateCashChange());
    document.getElementById('btnConfirmSale')?.addEventListener('click', () => this.confirmSale());

    // Modal Escáner Manual
    document.getElementById('btnSubmitManualBarcode')?.addEventListener('click', () => {
      const code = document.getElementById('manualBarcodeInput').value.trim();
      if (code) this.handleScannedBarcode(code);
    });

    // Modal Ticket Enviar WhatsApp
    document.getElementById('btnSendTicketWhatsApp')?.addEventListener('click', () => this.sendTicketViaWhatsApp());
    document.getElementById('btnShareCorteWhatsApp')?.addEventListener('click', () => this.sendCorteViaWhatsApp());

    // Atajos de Teclado (F12 Cobrar, Escape Cerrar Modales)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
        if (this.cart.length > 0 && !document.querySelector('.modal-overlay.active')) {
          this.openCheckoutModal();
        }
      } else if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });

    // Render Inicial
    this.renderPosCategories();
    this.renderPosProducts();
    this.renderCart();
    this.populateInventoryCategoryFilter();
    this.renderInventoryTable();
    this.renderCreditCustomers();
    this.renderSuppliers();
    this.renderCashSummary();
    this.initRangeReportUI();
    this.updateShiftHeader();
    this.checkLicenseStatus();
    document.getElementById('btnHeaderLicense')?.addEventListener('click', () => this.openActivationModal(false));
    this.updateBadges();
  }

  // ==========================================================================
  // 4. CONTROL DE PANTALLAS (VISTAS)
  // ==========================================================================
  switchView(viewId) {
    this.currentView = viewId;

    // Cambiar clases de sección
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');

    // Cambiar botones inferiores
    document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
      if (btn.getAttribute('data-view') === viewId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Actualizar datos de la vista abierta
    if (viewId === 'viewInventory') {
      this.renderInventoryTable();
    } else if (viewId === 'viewCredit') {
      this.renderCreditCustomers();
    } else if (viewId === 'viewSuppliers') {
      this.renderSuppliers();
    } else if (viewId === 'viewCash') {
      this.renderCashSummary();
    }
  }

  showToast(message, isError = false) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;
    toast.textContent = message;
    toast.style.borderColor = isError ? 'var(--rose)' : 'var(--emerald)';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add('active');
  }

  closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove('active');
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    this.closeScanner();
  }

  updateBadges() {
    const lowStockCount = this.db.products.filter(p => p.stock <= p.minStock).length;
    const debtorsCount = this.db.customers.filter(c => c.debt > 0).length;

    const bLow = document.getElementById('navBadgeLowStock');
    if (bLow) {
      if (lowStockCount > 0) {
        bLow.textContent = lowStockCount;
        bLow.style.display = 'block';
      } else {
        bLow.style.display = 'none';
      }
    }

    const bDeb = document.getElementById('navBadgeDebtors');
    if (bDeb) {
      if (debtorsCount > 0) {
        bDeb.textContent = debtorsCount;
        bDeb.style.display = 'block';
      } else {
        bDeb.style.display = 'none';
      }
    }
  }

  // ==========================================================================
  // 5. MÓDULO 1: PUNTO DE VENTA (POS)
  // ==========================================================================
  getCategoryEmoji(category) {
    switch (category) {
      case 'Bebidas': return '🥤';
      case 'Botanas': return '🥔';
      case 'Panadería': return '🍞';
      case 'Lácteos': return '🥛';
      case 'Abarrotes': return '🥫';
      case 'Limpieza': return '🧼';
      case 'Granel': return '⚖️';
      case 'Dulces': return '🍬';
      default: return '📦';
    }
  }

  renderPosCategories() {
    const container = document.getElementById('posCategoryPills');
    if (!container) return;

    const categories = ['all', 'Bebidas', 'Botanas', 'Panadería', 'Lácteos', 'Abarrotes', 'Limpieza', 'Granel'];
    
    container.innerHTML = categories.map(cat => {
      const activeClass = this.selectedCategory === cat ? 'active' : '';
      const label = cat === 'all' ? '✨ Todos' : `${this.getCategoryEmoji(cat)} ${cat}`;
      return `<button class="cat-pill ${activeClass}" onclick="app.setPosCategory('${cat}')">${label}</button>`;
    }).join('');
  }

  setPosCategory(cat) {
    this.selectedCategory = cat;
    this.renderPosCategories();
    this.renderPosProducts();
  }

  renderPosProducts() {
    const grid = document.getElementById('posProductsGrid');
    if (!grid) return;

    let filtered = this.db.products;

    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === this.selectedCategory);
    }

    if (this.searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(this.searchQuery) ||
        (p.barcode && p.barcode.includes(this.searchQuery)) ||
        p.category.toLowerCase().includes(this.searchQuery)
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:40px 10px; color:var(--text-muted);">
          <div style="font-size:2.5rem; margin-bottom:8px;">🔍</div>
          <div style="font-weight:600;">No se encontraron productos</div>
          <div style="font-size:0.75rem; margin-top:4px;">Intenta con otra palabra o registra el producto.</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      let stockClass = 'in-stock';
      let stockText = `${p.stock} ${p.unit}`;
      if (p.stock <= 0) {
        stockClass = 'out-stock';
        stockText = 'Agotado';
      } else if (p.stock <= p.minStock) {
        stockClass = 'low-stock';
        stockText = `Poco: ${p.stock}`;
      }

      const emoji = this.getCategoryEmoji(p.category);

      return `
        <div class="pos-product-card" onclick="app.addToCart('${p.id}')">
          <div class="card-top-info">
            <span class="card-cat-emoji">${emoji}</span>
            <span class="card-stock-tag ${stockClass}">${stockText}</span>
          </div>
          <div class="card-prod-name" title="${p.name}">${p.name}</div>
          <div class="card-price-row">
            <span class="card-price-val">$${p.price.toFixed(2)}</span>
            <span class="card-unit-label">/${p.unit}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  addToCart(productId, qty = 1, isBulkConfirmed = false) {
    const prod = this.db.products.find(p => p.id === productId);
    if (!prod) return;

    // Si es producto a granel (kilo) y no viene confirmado por la báscula, abrir calculadora
    if (prod.unit === 'kg' && !isBulkConfirmed) {
      this.openBulkModal(prod.id);
      return;
    }

    const existing = this.cart.find(item => item.product.id === productId);
    if (existing) {
      existing.qty += qty;
      existing.subtotal = existing.qty * existing.product.price;
    } else {
      this.cart.push({
        product: prod,
        qty: qty,
        subtotal: prod.price * qty
      });
    }

    this.playBeep(980, 0.08); // Bip agudo satisfactorio
    this.renderCart();
  }

  updateCartQty(productId, delta) {
    const itemIndex = this.cart.findIndex(i => i.product.id === productId);
    if (itemIndex === -1) return;

    this.cart[itemIndex].qty += delta;

    if (this.cart[itemIndex].qty <= 0) {
      this.cart.splice(itemIndex, 1);
    } else {
      this.cart[itemIndex].subtotal = this.cart[itemIndex].qty * this.cart[itemIndex].product.price;
    }

    this.renderCart();
  }

  clearCart() {
    this.cart = [];
    this.renderCart();
  }

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + item.subtotal, 0);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  renderCart() {
    const list = document.getElementById('cartItemsList');
    const totalDisplay = document.getElementById('cartTotalDisplay');
    const checkoutBtn = document.getElementById('btnCheckout');
    const mobileFloat = document.getElementById('mobileCartFloat');
    const mobileCount = document.getElementById('mobileCartCount');
    const mobileTotal = document.getElementById('mobileCartTotal');

    const total = this.getCartTotal();
    const count = this.getCartCount();

    if (totalDisplay) totalDisplay.textContent = `$${total.toFixed(2)}`;
    if (checkoutBtn) checkoutBtn.disabled = this.cart.length === 0;

    // Barra flotante móvil
    if (mobileFloat) {
      if (count > 0) {
        mobileFloat.classList.add('has-items');
        if (mobileCount) mobileCount.textContent = count;
        if (mobileTotal) mobileTotal.textContent = `$${total.toFixed(2)}`;
      } else {
        mobileFloat.classList.remove('has-items');
      }
    }

    if (!list) return;

    if (this.cart.length === 0) {
      list.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon">🛒</div>
          <div style="font-weight:600; font-size:0.95rem; margin-bottom:4px;">Tu canasta está vacía</div>
          <div style="font-size:0.75rem;">Toca cualquier producto de la izquierda o escanea con la cámara para vender.</div>
        </div>
      `;
      return;
    }

    list.innerHTML = this.cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.product.name}</div>
          <div class="cart-item-unit-price">$${item.product.price.toFixed(2)} c/u</div>
        </div>
        <div class="cart-item-stepper">
          <button class="btn-step" onclick="app.updateCartQty('${item.product.id}', -1)">-</button>
          <span class="cart-item-qty">${item.qty}</span>
          <button class="btn-step" onclick="app.updateCartQty('${item.product.id}', 1)">+</button>
        </div>
        <div class="cart-item-subtotal">$${item.subtotal.toFixed(2)}</div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 6. PROCESO DE COBRO Y EMISIÓN DE TICKET
  // ==========================================================================
  openCheckoutModal() {
    if (this.cart.length === 0) {
      this.showToast('Agrega productos al carrito primero', true);
      return;
    }

    const total = this.getCartTotal();
    document.getElementById('checkoutModalTotal').textContent = `$${total.toFixed(2)}`;
    
    // Configurar método por defecto
    this.selectedPaymentMethod = 'efectivo';
    document.querySelectorAll('#paymentMethodButtonGroup .method-btn').forEach(b => {
      b.classList.remove('btn-primary', 'active');
      b.classList.add('btn-secondary');
    });
    const cashBtn = document.querySelector('#paymentMethodButtonGroup [data-method="efectivo"]');
    if (cashBtn) {
      cashBtn.classList.remove('btn-secondary');
      cashBtn.classList.add('btn-primary', 'active');
    }

    document.getElementById('sectionCashPayment').style.display = 'block';
    document.getElementById('sectionCreditPayment').style.display = 'none';

    const input = document.getElementById('inputCashReceived');
    input.value = total.toFixed(2); // Inicia con monto exacto
    this.calculateCashChange();

    this.openModal('modalCheckout');
    setTimeout(() => {
      input.focus();
      input.select();
    }, 150);
  }

  calculateCashChange() {
    const total = this.getCartTotal();
    const received = parseFloat(document.getElementById('inputCashReceived').value) || 0;
    const changeDisplay = document.getElementById('displayCashChange');
    const confirmBtn = document.getElementById('btnConfirmSale');

    if (this.selectedPaymentMethod === 'efectivo') {
      const change = received - total;
      if (change < 0) {
        changeDisplay.textContent = `Faltan $${Math.abs(change).toFixed(2)}`;
        changeDisplay.style.color = 'var(--rose)';
        if (confirmBtn) confirmBtn.disabled = true;
      } else {
        changeDisplay.textContent = `$${change.toFixed(2)}`;
        changeDisplay.style.color = 'var(--emerald-light)';
        if (confirmBtn) confirmBtn.disabled = false;
      }
    } else {
      if (confirmBtn) confirmBtn.disabled = false;
    }
  }

  populateCreditCustomersSelect() {
    const sel = document.getElementById('selectCreditCustomer');
    if (!sel) return;

    sel.innerHTML = '<option value="">-- Selecciona el cliente --</option>' + 
      this.db.customers.map(c => `
        <option value="${c.id}">${c.name} (Deuda actual: $${c.debt.toFixed(2)})</option>
      `).join('');
  }

  confirmSale() {
    if (this.isTrialExpired()) {
      this.showToast('Tu periodo de prueba ha terminado. Por favor activa tu licencia.', true);
      this.openActivationModal(true);
      return;
    }
    const total = this.getCartTotal();
    const now = new Date();
    const folio = 'T-' + Math.floor(100000 + Math.random() * 900000);

    let customerId = null;
    let customerName = null;
    let cashReceived = total;
    let cashChange = 0;

    if (this.selectedPaymentMethod === 'efectivo') {
      cashReceived = parseFloat(document.getElementById('inputCashReceived').value) || total;
      cashChange = Math.max(0, cashReceived - total);
      if (cashReceived < total) {
        this.showToast('El efectivo recibido es menor al total', true);
        return;
      }
    } else if (this.selectedPaymentMethod === 'fiado') {
      customerId = document.getElementById('selectCreditCustomer').value;
      if (!customerId) {
        this.showToast('Por favor selecciona el cliente que se lleva el fiado', true);
        return;
      }
      const customer = this.db.customers.find(c => c.id === customerId);
      if (customer) {
        customerName = customer.name;
        // Sumar a la deuda del cliente
        customer.debt += total;
        customer.lastPaymentDate = now.toISOString().split('T')[0];
      }
    }

    // Descontar inventario y calcular costo total para la ganancia
    let totalCost = 0;
    this.cart.forEach(item => {
      const p = this.db.products.find(prod => prod.id === item.product.id);
      if (p) {
        p.stock = Math.max(0, p.stock - item.qty);
        totalCost += (p.cost * item.qty);
      }
    });

    const netProfit = total - totalCost;

    const saleRecord = {
      folio: folio,
      date: now.toISOString(),
      items: JSON.parse(JSON.stringify(this.cart)),
      total: total,
      totalCost: totalCost,
      netProfit: netProfit,
      method: this.selectedPaymentMethod,
      cashReceived: cashReceived,
      cashChange: cashChange,
      customerId: customerId,
      customerName: customerName
    };

    this.db.sales.push(saleRecord);
    this.saveDatabase();

    this.playBeep(1200, 0.2, 'triangle');
    this.closeModal('modalCheckout');
    this.showToast(`¡Venta realizada! Folio: ${folio}`);

    // Mostrar modal con el ticket listo para imprimir o WhatsApp
    this.showTicketModal(saleRecord);

    // Limpiar carrito
    this.clearCart();
    this.renderPosProducts();
    this.renderInventoryTable();
    this.renderCreditCustomers();
    this.renderCashSummary();
  }

  showTicketModal(sale) {
    this.currentSaleForTicket = sale;
    const preview = document.getElementById('ticketReceiptPreview');
    if (!preview) return;

    const dateFormatted = new Date(sale.date).toLocaleString('es-MX', {
      dateStyle: 'short',
      timeStyle: 'medium'
    });

    let itemsHtml = sale.items.map(i => `
      <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
        <span>${i.qty}x ${i.product.name.substring(0, 22)}</span>
        <span>$${i.subtotal.toFixed(2)}</span>
      </div>
    `).join('');

    let paymentDetail = '';
    if (sale.method === 'efectivo') {
      paymentDetail = `
        <div style="display:flex; justify-content:space-between;"><span>Pago en Efectivo:</span> <span>$${sale.cashReceived.toFixed(2)}</span></div>
        <div style="display:flex; justify-content:space-between; font-weight:bold;"><span>Cambio:</span> <span>$${sale.cashChange.toFixed(2)}</span></div>
      `;
    } else if (sale.method === 'fiado') {
      paymentDetail = `
        <div style="display:flex; justify-content:space-between; color:#B91C1C; font-weight:bold;"><span>A Cuenta Fiado:</span> <span>${sale.customerName}</span></div>
      `;
    } else {
      paymentDetail = `
        <div style="display:flex; justify-content:space-between;"><span>Método:</span> <span style="text-transform:capitalize;">${sale.method}</span></div>
      `;
    }

    preview.innerHTML = `
      <div style="text-align:center; border-bottom:1px dashed #444; padding-bottom:8px; margin-bottom:8px;">
        <div style="font-weight:900; font-size:1.1rem; letter-spacing:0.5px;">🏪 ${this.db.storeName.toUpperCase()}</div>
        <div style="font-size:0.75rem; color:#555;">Abarrotes & Comercio General</div>
        <div style="font-size:0.72rem; color:#777; margin-top:3px;">Ticket: <strong>${sale.folio}</strong></div>
        <div style="font-size:0.72rem; color:#777;">Fecha: ${dateFormatted}</div>
      </div>

      <div style="border-bottom:1px dashed #444; padding-bottom:8px; margin-bottom:8px;">
        ${itemsHtml}
      </div>

      <div style="border-bottom:1px dashed #444; padding-bottom:8px; margin-bottom:8px;">
        <div style="display:flex; justify-content:space-between; font-size:1.05rem; font-weight:900;">
          <span>TOTAL:</span>
          <span>$${sale.total.toFixed(2)} MXN</span>
        </div>
        ${paymentDetail}
      </div>

      <div style="text-align:center; font-size:0.75rem; color:#555; margin-top:8px;">
        ¡GRACIAS POR SU COMPRA!<br>Vuelva pronto 🤝
      </div>
    `;

    // Si la venta fue a un cliente fiado que tiene teléfono, pre-llenar
    const phoneInput = document.getElementById('inputTicketWhatsAppNumber');
    if (phoneInput) {
      if (sale.customerId) {
        const cust = this.db.customers.find(c => c.id === sale.customerId);
        phoneInput.value = cust && cust.phone ? cust.phone : '';
      } else {
        phoneInput.value = '';
      }
    }

    this.openModal('modalTicket');
  }

  sendTicketViaWhatsApp() {
    if (!this.currentSaleForTicket) return;
    const phoneInput = document.getElementById('inputTicketWhatsAppNumber');
    let phone = phoneInput ? phoneInput.value.replace(/[^0-9]/g, '') : '';

    if (!phone || phone.length < 10) {
      this.showToast('Introduce un número de WhatsApp a 10 dígitos', true);
      return;
    }

    // Agregar código de país México (52) si no lo tiene
    if (phone.length === 10) phone = '52' + phone;

    const sale = this.currentSaleForTicket;
    let itemsText = sale.items.map(i => `• ${i.qty}x ${i.product.name} = $${i.subtotal.toFixed(2)}`).join('\n');
    
    let text = `*🏪 ${this.db.storeName.toUpperCase()}*\n`;
    text += `*TICKET DIGITAL:* ${sale.folio}\n`;
    text += `📅 Fecha: ${new Date(sale.date).toLocaleString('es-MX')}\n\n`;
    text += `*Artículos:*\n${itemsText}\n\n`;
    text += `*TOTAL PAGADO: $${sale.total.toFixed(2)} MXN*\n`;
    text += `Método: ${sale.method.toUpperCase()}\n\n`;
    text += `¡Muchas gracias por su preferencia! Que tenga excelente día ✨`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // ==========================================================================
  // 7. MÓDULO 2: INVENTARIO Y CATÁLOGO
  // ==========================================================================
  populateInventoryCategoryFilter() {
    const sel = document.getElementById('invCategoryFilter');
    if (!sel) return;

    const categories = ['Bebidas', 'Botanas', 'Panadería', 'Lácteos', 'Abarrotes', 'Limpieza', 'Granel', 'Dulces', 'Otros'];
    sel.innerHTML = '<option value="all">Todas las Categorías</option>' + 
      categories.map(c => `<option value="${c}">${this.getCategoryEmoji(c)} ${c}</option>`).join('');
  }

  renderInventoryTable() {
    const tbody = document.getElementById('inventoryTableBody');
    if (!tbody) return;

    const search = (document.getElementById('invSearchInput')?.value || '').toLowerCase();
    const catFilter = document.getElementById('invCategoryFilter')?.value || 'all';

    // Métricas en la parte superior
    let totalProducts = this.db.products.length;
    let totalCostVal = 0;
    let totalSaleVal = 0;
    let lowStockCount = 0;

    this.db.products.forEach(p => {
      totalCostVal += (p.cost * p.stock);
      totalSaleVal += (p.price * p.stock);
      if (p.stock <= p.minStock) lowStockCount++;
    });

    document.getElementById('invStatTotalProducts').textContent = totalProducts;
    document.getElementById('invStatCostValue').textContent = `$${totalCostVal.toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    document.getElementById('invStatSaleValue').textContent = `$${totalSaleVal.toLocaleString('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    document.getElementById('invStatLowStock').textContent = lowStockCount;

    let filtered = this.db.products;
    if (catFilter !== 'all') {
      filtered = filtered.filter(p => p.category === catFilter);
    }
    if (search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search) ||
        (p.barcode && p.barcode.includes(search)) ||
        p.category.toLowerCase().includes(search)
      );
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">
            No hay productos que coincidan con la búsqueda.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(p => {
      const margin = p.cost > 0 ? (((p.price - p.cost) / p.cost) * 100).toFixed(0) : '0';
      
      let stockBadge = `<span style="color:var(--emerald-light); font-weight:700;">${p.stock} ${p.unit}</span>`;
      if (p.stock <= 0) {
        stockBadge = `<span style="background:rgba(239,68,68,0.2); color:var(--rose); padding:2px 6px; border-radius:4px; font-weight:700;">Agotado (0)</span>`;
      } else if (p.stock <= p.minStock) {
        stockBadge = `<span style="background:rgba(245,158,11,0.2); color:var(--amber); padding:2px 6px; border-radius:4px; font-weight:700;">Bajo (${p.stock})</span>`;
      }

      return `
        <tr>
          <td>
            <div style="font-weight:700; color:#fff;">${p.name}</div>
            <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--text-muted);">${p.barcode || 'Sin código'}</div>
          </td>
          <td>${this.getCategoryEmoji(p.category)} ${p.category}</td>
          <td style="font-family:var(--font-mono);">$${p.cost.toFixed(2)}</td>
          <td style="font-family:var(--font-mono); font-weight:700; color:var(--emerald-light);">$${p.price.toFixed(2)}</td>
          <td style="font-family:var(--font-mono); color:var(--cyan); font-weight:700;">+${margin}%</td>
          <td>
            <div style="display:flex; align-items:center; gap:6px;">
              <button class="btn-step" onclick="app.quickAdjustStock('${p.id}', -1)" title="Restar 1">-</button>
              ${stockBadge}
              <button class="btn-step" onclick="app.quickAdjustStock('${p.id}', 1)" title="Sumar 1">+</button>
            </div>
          </td>
          <td style="text-align:right;">
            <button class="btn-step" style="display:inline-flex; width:30px; height:30px;" onclick="app.openProductModal('${p.id}')" title="Editar Producto">✏️</button>
            <button class="btn-step" style="display:inline-flex; width:30px; height:30px; color:var(--rose);" onclick="app.deleteProduct('${p.id}')" title="Eliminar Producto">🗑️</button>
          </td>
        </tr>
      `;
    }).join('');
  }

  quickAdjustStock(productId, delta) {
    const prod = this.db.products.find(p => p.id === productId);
    if (!prod) return;

    prod.stock = Math.max(0, prod.stock + delta);
    this.saveDatabase();
    this.renderInventoryTable();
    this.renderPosProducts();
    this.playBeep(800, 0.05);
  }

  openProductModal(productId = null) {
    const title = document.getElementById('modalProductTitle');
    const idInput = document.getElementById('prodFormId');
    const barcodeInput = document.getElementById('prodFormBarcode');
    const nameInput = document.getElementById('prodFormName');
    const catInput = document.getElementById('prodFormCategory');
    const unitInput = document.getElementById('prodFormUnit');
    const costInput = document.getElementById('prodFormCost');
    const priceInput = document.getElementById('prodFormPrice');
    const stockInput = document.getElementById('prodFormStock');
    const minStockInput = document.getElementById('prodFormMinStock');

    if (productId) {
      const prod = this.db.products.find(p => p.id === productId);
      if (!prod) return;
      title.textContent = 'Editar Producto';
      idInput.value = prod.id;
      barcodeInput.value = prod.barcode || '';
      nameInput.value = prod.name;
      catInput.value = prod.category;
      unitInput.value = prod.unit;
      costInput.value = prod.cost;
      priceInput.value = prod.price;
      stockInput.value = prod.stock;
      minStockInput.value = prod.minStock;
      const expInput = document.getElementById('prodFormExpDate');
      if (expInput) expInput.value = prod.expDate || '';
    } else {
      title.textContent = 'Nuevo Producto';
      idInput.value = '';
      barcodeInput.value = '';
      nameInput.value = '';
      catInput.value = 'Abarrotes';
      unitInput.value = 'pza';
      costInput.value = '';
      priceInput.value = '';
      stockInput.value = '10';
      minStockInput.value = '3';
    }

    this.openModal('modalProduct');
  }

  saveProduct() {
    const id = document.getElementById('prodFormId').value;
    const barcode = document.getElementById('prodFormBarcode').value.trim();
    const name = document.getElementById('prodFormName').value.trim();
    const category = document.getElementById('prodFormCategory').value;
    const unit = document.getElementById('prodFormUnit').value;
    const cost = parseFloat(document.getElementById('prodFormCost').value) || 0;
    const price = parseFloat(document.getElementById('prodFormPrice').value) || 0;
    const stock = parseFloat(document.getElementById('prodFormStock').value) || 0;
    const minStock = parseFloat(document.getElementById('prodFormMinStock').value) || 3;
    const expDate = document.getElementById('prodFormExpDate')?.value || null;

    if (!name || price <= 0) {
      this.showToast('Introduce al menos nombre y precio de venta válidos', true);
      return;
    }

    if (id) {
      // Editar
      const p = this.db.products.find(prod => prod.id === id);
      if (p) {
        p.barcode = barcode;
        p.name = name;
        p.category = category;
        p.unit = unit;
        p.cost = cost;
        p.price = price;
        p.stock = stock;
        p.minStock = minStock;
        p.expDate = expDate;
      }
      this.showToast('Producto actualizado correctamente');
    } else {
      // Crear nuevo
      const newId = 'prod_' + Date.now();
      this.db.products.unshift({
        id: newId,
        barcode: barcode,
        name: name,
        category: category,
        unit: unit,
        cost: cost,
        price: price,
        stock: stock,
        minStock: minStock,
        expDate: expDate
      });
      this.showToast('Producto agregado al catálogo');
    }

    this.saveDatabase();
    this.closeModal('modalProduct');
    this.renderInventoryTable();
    this.renderPosProducts();
  }

  deleteProduct(productId) {
    const prod = this.db.products.find(p => p.id === productId);
    if (!prod) return;

    if (confirm(`¿Estás seguro de eliminar "${prod.name}" del catálogo?`)) {
      this.db.products = this.db.products.filter(p => p.id !== productId);
      this.saveDatabase();
      this.renderInventoryTable();
      this.renderPosProducts();
      this.showToast('Producto eliminado');
    }
  }

  // ==========================================================================
  // 8. MÓDULO 3: LIBRETA DE FIADOS (CUENTAS POR COBRAR)
  // ==========================================================================
  renderCreditCustomers() {
    const list = document.getElementById('creditCustomersList');
    if (!list) return;

    const search = (document.getElementById('creditSearchInput')?.value || '').toLowerCase();

    let totalOwed = 0;
    let activeDebtorsCount = 0;

    this.db.customers.forEach(c => {
      if (c.debt > 0) {
        totalOwed += c.debt;
        activeDebtorsCount++;
      }
    });

    document.getElementById('creditTotalOwed').textContent = `$${totalOwed.toFixed(2)}`;
    document.getElementById('creditClientsCount').textContent = `${activeDebtorsCount} clientes con saldo pendiente de pago`;

    let filtered = this.db.customers;
    if (search) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(search) ||
        (c.phone && c.phone.includes(search)) ||
        (c.address && c.address.toLowerCase().includes(search))
      );
    }

    if (filtered.length === 0) {
      list.innerHTML = `
        <div style="text-align:center; padding:40px; color:var(--text-muted); background:var(--bg-surface); border-radius:12px; border:1px solid var(--border-color);">
          <div style="font-size:2.5rem; margin-bottom:8px;">📒</div>
          <div style="font-weight:700;">No hay clientes en la libreta</div>
          <div style="font-size:0.75rem; margin-top:4px;">Toca "+ Nuevo Cliente Fiado" para agregar uno.</div>
        </div>
      `;
      return;
    }

    list.innerHTML = filtered.map(c => {
      const isOverLimit = c.debt >= c.limit;
      const debtColor = c.debt > 0 ? 'var(--rose)' : 'var(--emerald-light)';

      return `
        <div class="credit-customer-card" style="border-left:4px solid ${c.debt > 0 ? 'var(--rose)' : 'var(--emerald)'};">
          <div style="flex:1; min-width:200px;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:1.1rem; font-weight:800; color:#fff;">${c.name}</span>
              ${isOverLimit ? '<span style="font-size:0.65rem; background:rgba(239,68,68,0.25); color:var(--rose); padding:2px 6px; border-radius:4px; font-weight:700;">LÍMITE ALCANZADO</span>' : ''}
            </div>
            <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:3px;">
              📞 ${c.phone || 'Sin celular'} &bull; 📍 ${c.address || 'Sin dirección'}
            </div>
            <div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">
              Límite permitido: <strong>$${c.limit.toFixed(2)}</strong> &bull; Último abono: ${c.lastPaymentDate || 'Sin registro'}
            </div>
          </div>

          <div style="text-align:right; margin-right:8px;">
            <div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Deuda Total</div>
            <div style="font-family:var(--font-mono); font-size:1.6rem; font-weight:800; color:${debtColor};">
              $${c.debt.toFixed(2)}
            </div>
          </div>

          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn btn-primary" style="font-size:0.78rem; height:34px; padding:0 10px;" onclick="app.openCreditTransModal('${c.id}', 'payment')">
              📥 Abonar
            </button>
            <button class="btn btn-secondary" style="font-size:0.78rem; height:34px; padding:0 10px;" onclick="app.openCreditTransModal('${c.id}', 'charge')">
              ➕ Fiado
            </button>
            <button class="btn btn-whatsapp" style="font-size:0.78rem; height:34px; padding:0 10px;" onclick="app.sendDebtReminderWhatsApp('${c.id}')" title="Enviar Recordatorio Amigable por WhatsApp">
              📲 Cobrar
            </button>
            <button class="btn-step" style="width:34px; height:34px;" onclick="app.openCustomerModal('${c.id}')" title="Editar Cliente">
              ✏️
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  openCustomerModal(customerId = null) {
    const title = document.getElementById('modalCustomerTitle');
    const idInput = document.getElementById('custFormId');
    const nameInput = document.getElementById('custFormName');
    const phoneInput = document.getElementById('custFormPhone');
    const limitInput = document.getElementById('custFormLimit');
    const addrInput = document.getElementById('custFormAddress');

    if (customerId) {
      const c = this.db.customers.find(cust => cust.id === customerId);
      if (!c) return;
      title.textContent = 'Editar Cliente Fiado';
      idInput.value = c.id;
      nameInput.value = c.name;
      phoneInput.value = c.phone || '';
      limitInput.value = c.limit;
      addrInput.value = c.address || '';
    } else {
      title.textContent = 'Nuevo Cliente Fiado';
      idInput.value = '';
      nameInput.value = '';
      phoneInput.value = '';
      limitInput.value = '1000';
      addrInput.value = '';
    }

    this.openModal('modalCustomer');
  }

  saveCustomer() {
    const id = document.getElementById('custFormId').value;
    const name = document.getElementById('custFormName').value.trim();
    const phone = document.getElementById('custFormPhone').value.trim();
    const limit = parseFloat(document.getElementById('custFormLimit').value) || 1000;
    const address = document.getElementById('custFormAddress').value.trim();

    if (!name) {
      this.showToast('El nombre del cliente es obligatorio', true);
      return;
    }

    if (id) {
      const c = this.db.customers.find(cust => cust.id === id);
      if (c) {
        c.name = name;
        c.phone = phone;
        c.limit = limit;
        c.address = address;
      }
      this.showToast('Cliente actualizado');
    } else {
      this.db.customers.push({
        id: 'cust_' + Date.now(),
        name: name,
        phone: phone,
        limit: limit,
        debt: 0.00,
        address: address,
        lastPaymentDate: null
      });
      this.showToast('Cliente agregado a la libreta');
    }

    this.saveDatabase();
    this.closeModal('modalCustomer');
    this.renderCreditCustomers();
  }

  openCreditTransModal(customerId, type = 'payment') {
    const c = this.db.customers.find(cust => cust.id === customerId);
    if (!c) return;

    this.currentDebtorForTrans = c;
    document.getElementById('creditTransCustomerName').textContent = c.name;
    document.getElementById('creditTransCurrentDebt').textContent = `$${c.debt.toFixed(2)}`;
    document.getElementById('creditTransAmount').value = '';
    document.getElementById('creditTransNote').value = '';

    this.setCreditTransType(type);
    this.openModal('modalCreditTransaction');

    setTimeout(() => {
      document.getElementById('creditTransAmount').focus();
    }, 150);
  }

  setCreditTransType(type) {
    this.creditTransType = type;
    const btnPay = document.getElementById('btnTypePayment');
    const btnChg = document.getElementById('btnTypeCharge');
    const title = document.getElementById('modalCreditTransTitle');
    const confirmBtn = document.getElementById('btnConfirmCreditTrans');

    if (type === 'payment') {
      btnPay.classList.add('btn-primary', 'active');
      btnPay.classList.remove('btn-secondary');
      btnChg.classList.add('btn-secondary');
      btnChg.classList.remove('btn-primary', 'active');
      title.textContent = '📥 Recibir Abono de Cliente';
      confirmBtn.textContent = 'Registrar Abono';
    } else {
      btnChg.classList.add('btn-primary', 'active');
      btnChg.classList.remove('btn-secondary');
      btnPay.classList.add('btn-secondary');
      btnPay.classList.remove('btn-primary', 'active');
      title.textContent = '➕ Sumar Fiado a la Cuenta';
      confirmBtn.textContent = 'Cargar a la Cuenta';
    }
  }

  saveCreditTransaction() {
    if (!this.currentDebtorForTrans) return;
    const amount = parseFloat(document.getElementById('creditTransAmount').value) || 0;
    const note = document.getElementById('creditTransNote').value.trim();

    if (amount <= 0) {
      this.showToast('Introduce un monto mayor a cero', true);
      return;
    }

    const c = this.currentDebtorForTrans;
    const nowStr = new Date().toISOString().split('T')[0];

    if (this.creditTransType === 'payment') {
      // Abono: disminuye deuda y entra dinero a la caja
      c.debt = Math.max(0, c.debt - amount);
      c.lastPaymentDate = nowStr;

      // Movimiento de caja (ingreso por abono)
      this.db.cashMovements.push({
        type: 'credit_payment',
        amount: amount,
        concept: `Abono de fiado: ${c.name} (${note || 'Sin nota'})`,
        date: new Date().toISOString(),
        customerId: c.id
      });

      this.showToast(`Abono registrado: +$${amount.toFixed(2)}`);
      this.playBeep(1100, 0.15);
    } else {
      // Cargo extra de fiado
      c.debt += amount;
      this.showToast(`Fiado cargado: +$${amount.toFixed(2)}`);
      this.playBeep(700, 0.1);
    }

    this.saveDatabase();
    this.closeModal('modalCreditTransaction');
    this.renderCreditCustomers();
    this.renderCashSummary();
  }

  sendDebtReminderWhatsApp(customerId) {
    const c = this.db.customers.find(cust => cust.id === customerId);
    if (!c) return;

    if (c.debt <= 0) {
      this.showToast('Este cliente no tiene deuda pendiente', true);
      return;
    }

    let phone = c.phone ? c.phone.replace(/[^0-9]/g, '') : '';
    if (!phone || phone.length < 10) {
      this.showToast('El cliente no tiene teléfono celular registrado', true);
      return;
    }
    if (phone.length === 10) phone = '52' + phone;

    let text = `¡Hola ${c.name}! Buen día ☀️\n\n`;
    text += `Le enviamos un saludo cordial de la tienda *${this.db.storeName}*.\n`;
    text += `Le compartimos con mucho aprecio su saldo pendiente de fiado por un total de *$${c.debt.toFixed(2)} MXN*.\n\n`;
    text += `Puede pasar a liquidar o dar un abono cuando guste para mantener su crédito abierto. ¡Muchas gracias por su preferencia y confianza! 🤝🏪`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // ==========================================================================
  // 9. MÓDULO 4: PROVEEDORES Y PEDIDOS
  // ==========================================================================
  renderSuppliers() {
    const container = document.getElementById('suppliersListContainer');
    if (!container) return;

    if (this.db.suppliers.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:40px; color:var(--text-muted); background:var(--bg-surface); border-radius:12px; border:1px solid var(--border-color);">
          <div style="font-size:2.5rem; margin-bottom:8px;">🚚</div>
          <div style="font-weight:700;">No hay proveedores registrados</div>
          <div style="font-size:0.75rem; margin-top:4px;">Toca "+ Agregar Proveedor" para comenzar.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = this.db.suppliers.map(s => `
      <div class="supplier-card">
        <div style="flex:1; min-width:220px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:1.15rem; font-weight:800; color:#fff;">${s.company}</span>
            <span class="visit-day-badge">Visita: ${s.visitDay}</span>
          </div>
          <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">
            👤 Preventista: <strong>${s.contact || 'No asignado'}</strong> &bull; 📞 ${s.phone || 'Sin número'}
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px; font-style:italic;">
            "${s.notes || 'Sin notas especiales'}"
          </div>
        </div>

        <div style="display:flex; gap:8px; align-items:center;">
          <button class="btn btn-whatsapp" onclick="app.sendSupplierOrderWhatsApp('${s.id}')">
            <span>📲</span> Hacer Pedido
          </button>
          <button class="btn btn-secondary" onclick="app.openSupplierModal('${s.id}')" title="Editar Proveedor">
            <span>✏️</span> Editar
          </button>
          <button class="btn-step" style="width:38px; height:38px; color:var(--rose);" onclick="app.deleteSupplier('${s.id}')" title="Eliminar">
            🗑️
          </button>
        </div>
      </div>
    `).join('');
  }

  openSupplierModal(supplierId = null) {
    const title = document.getElementById('modalSupplierTitle');
    const idInput = document.getElementById('suppFormId');
    const compInput = document.getElementById('suppFormCompany');
    const contInput = document.getElementById('suppFormContact');
    const phoneInput = document.getElementById('suppFormPhone');
    const dayInput = document.getElementById('suppFormVisitDay');
    const notesInput = document.getElementById('suppFormNotes');

    if (supplierId) {
      const s = this.db.suppliers.find(supp => supp.id === supplierId);
      if (!s) return;
      title.textContent = 'Editar Proveedor';
      idInput.value = s.id;
      compInput.value = s.company;
      contInput.value = s.contact || '';
      phoneInput.value = s.phone || '';
      dayInput.value = s.visitDay;
      notesInput.value = s.notes || '';
    } else {
      title.textContent = 'Nuevo Proveedor';
      idInput.value = '';
      compInput.value = '';
      contInput.value = '';
      phoneInput.value = '';
      dayInput.value = 'Lunes';
      notesInput.value = '';
    }

    this.openModal('modalSupplier');
  }

  saveSupplier() {
    const id = document.getElementById('suppFormId').value;
    const company = document.getElementById('suppFormCompany').value.trim();
    const contact = document.getElementById('suppFormContact').value.trim();
    const phone = document.getElementById('suppFormPhone').value.trim();
    const visitDay = document.getElementById('suppFormVisitDay').value;
    const notes = document.getElementById('suppFormNotes').value.trim();

    if (!company || !phone) {
      this.showToast('Nombre de empresa y teléfono son obligatorios', true);
      return;
    }

    if (id) {
      const s = this.db.suppliers.find(supp => supp.id === id);
      if (s) {
        s.company = company;
        s.contact = contact;
        s.phone = phone;
        s.visitDay = visitDay;
        s.notes = notes;
      }
      this.showToast('Proveedor actualizado');
    } else {
      this.db.suppliers.push({
        id: 'supp_' + Date.now(),
        company: company,
        contact: contact,
        phone: phone,
        visitDay: visitDay,
        notes: notes
      });
      this.showToast('Proveedor registrado');
    }

    this.saveDatabase();
    this.closeModal('modalSupplier');
    this.renderSuppliers();
  }

  deleteSupplier(supplierId) {
    const s = this.db.suppliers.find(supp => supp.id === supplierId);
    if (!s) return;

    if (confirm(`¿Eliminar proveedor ${s.company}?`)) {
      this.db.suppliers = this.db.suppliers.filter(supp => supp.id !== supplierId);
      this.saveDatabase();
      this.renderSuppliers();
      this.showToast('Proveedor eliminado');
    }
  }

  sendSupplierOrderWhatsApp(supplierId) {
    const s = this.db.suppliers.find(supp => supp.id === supplierId);
    if (!s) return;

    let phone = s.phone.replace(/[^0-9]/g, '');
    if (phone.length === 10) phone = '52' + phone;

    // Buscar productos con stock bajo de esta categoría o en general
    const lowStock = this.db.products.filter(p => p.stock <= p.minStock);
    let lowStockText = '';
    if (lowStock.length > 0) {
      lowStockText = lowStock.map(p => `- ${p.name} (Quedan solo ${p.stock} ${p.unit})`).join('\n');
    } else {
      lowStockText = 'Surtido habitual de la semana.';
    }

    let text = `¡Hola ${s.contact || s.company}! Buen día 🚚\n\n`;
    text += `Te escribo de la tienda *${this.db.storeName}* para pasarte el pedido de la semana:\n\n`;
    text += `*Productos que me hacen falta / por agotarse:*\n${lowStockText}\n\n`;
    text += `Por favor confírmame el día y hora aproximada de entrega. ¡Muchas gracias! 📦`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // ==========================================================================
  // 10. MÓDULO 5: CAJA, GASTOS Y CORTE
  // ==========================================================================
  renderCashSummary() {
    const todayStr = new Date().toISOString().split('T')[0];

    // Ventas de hoy
    const todaySales = this.db.sales.filter(s => s.date.startsWith(todayStr));
    const totalSalesAmount = todaySales.reduce((acc, s) => acc + s.total, 0);
    const totalSalesProfit = todaySales.reduce((acc, s) => acc + (s.netProfit || 0), 0);

    // Desglose por método
    let cashSales = 0;
    let cardSales = 0;
    let transferSales = 0;
    let creditSales = 0;

    todaySales.forEach(s => {
      if (s.method === 'efectivo') cashSales += s.total;
      else if (s.method === 'tarjeta') cardSales += s.total;
      else if (s.method === 'transferencia') transferSales += s.total;
      else if (s.method === 'fiado') creditSales += s.total;
    });

    // Abonos recibidos hoy (entradas de efectivo)
    const todayPayments = this.db.cashMovements
      .filter(m => m.type === 'credit_payment' && m.date.startsWith(todayStr))
      .reduce((acc, m) => acc + m.amount, 0);

    // Gastos / Salidas de caja hoy
    const todayExpenses = this.db.cashMovements
      .filter(m => m.type === 'expense' && m.date.startsWith(todayStr))
      .reduce((acc, m) => acc + m.amount, 0);

    const initialFund = this.db.cash.initialFund || 0;
    const expectedInDrawer = initialFund + cashSales + todayPayments - todayExpenses;

    // Actualizar vista
    document.getElementById('cashStatInitial').textContent = `$${initialFund.toFixed(2)}`;
    document.getElementById('cashStatSales').textContent = `$${totalSalesAmount.toFixed(2)}`;
    document.getElementById('cashStatSalesCount').textContent = `${todaySales.length} tickets emitidos hoy`;
    document.getElementById('cashStatExpenses').textContent = `-$${todayExpenses.toFixed(2)}`;
    document.getElementById('cashStatExpectedInDrawer').textContent = `$${expectedInDrawer.toFixed(2)}`;

    // Métodos
    document.getElementById('cashBreakdownCash').textContent = `$${cashSales.toFixed(2)}`;
    document.getElementById('cashBreakdownCard').textContent = `$${cardSales.toFixed(2)}`;
    document.getElementById('cashBreakdownTransfer').textContent = `$${transferSales.toFixed(2)}`;
    document.getElementById('cashBreakdownCredit').textContent = `$${creditSales.toFixed(2)}`;
    document.getElementById('cashBreakdownPayments').textContent = `+$${todayPayments.toFixed(2)}`;
    document.getElementById('cashEstimatedProfit').textContent = `$${totalSalesProfit.toFixed(2)}`;

    // Top Productos Vendidos Hoy
    const topContainer = document.getElementById('topSellingProductsList');
    if (topContainer) {
      const productCounts = {};
      todaySales.forEach(s => {
        s.items.forEach(i => {
          if (!productCounts[i.product.name]) {
            productCounts[i.product.name] = { qty: 0, amount: 0 };
          }
          productCounts[i.product.name].qty += i.qty;
          productCounts[i.product.name].amount += i.subtotal;
        });
      });

      const sorted = Object.entries(productCounts)
        .sort((a, b) => b[1].qty - a[1].qty)
        .slice(0, 5);

      if (sorted.length === 0) {
        topContainer.innerHTML = `<p style="color:var(--text-muted); font-size:0.8rem;">Sin ventas registradas hoy aún.</p>`;
      } else {
        topContainer.innerHTML = sorted.map(([name, data], idx) => `
          <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:0.82rem;">
            <span>${idx + 1}. ${name}</span>
            <span style="font-family:var(--font-mono); font-weight:700; color:var(--emerald-light);">${data.qty} pzas ($${data.amount.toFixed(2)})</span>
          </div>
        `).join('');
      }
    }

    // Actualizar también el reporte por rango de fechas
    this.renderDateRangeReport();
  }

  // ==========================================================================
  // 10.1 REPORTE DE GANANCIAS POR RANGO DE FECHAS
  // ==========================================================================
  initRangeReportUI() {
    // Fechas por defecto: Este Mes
    this.setDateRangePreset('month');

    // Botones de presets rápidos
    document.querySelectorAll('.range-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        this.setDateRangePreset(preset);
      });
    });

    // Botón manual Consultar
    document.getElementById('btnFilterDateRange')?.addEventListener('click', () => {
      document.querySelectorAll('.range-preset-btn').forEach(b => b.classList.remove('active'));
      this.renderDateRangeReport();
    });

    // Botón Enviar por WhatsApp
    document.getElementById('btnShareRangeReportWhatsApp')?.addEventListener('click', () => {
      this.sendRangeReportWhatsApp();
    });
  }

  setDateRangePreset(preset) {
    document.querySelectorAll('.range-preset-btn').forEach(b => {
      if (b.getAttribute('data-preset') === preset) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    let startStr = todayStr;
    let endStr = todayStr;

    if (preset === 'today') {
      startStr = todayStr;
      endStr = todayStr;
    } else if (preset === 'yesterday') {
      const y = new Date(now);
      y.setDate(y.getDate() - 1);
      startStr = y.toISOString().split('T')[0];
      endStr = startStr;
    } else if (preset === 'week') {
      const w = new Date(now);
      w.setDate(w.getDate() - 6);
      startStr = w.toISOString().split('T')[0];
      endStr = todayStr;
    } else if (preset === 'month') {
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      startStr = firstDay.toISOString().split('T')[0];
      endStr = todayStr;
    } else if (preset === 'lastMonth') {
      const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      startStr = firstDayLastMonth.toISOString().split('T')[0];
      endStr = lastDayLastMonth.toISOString().split('T')[0];
    }

    const inputStart = document.getElementById('reportStartDate');
    const inputEnd = document.getElementById('reportEndDate');
    if (inputStart) inputStart.value = startStr;
    if (inputEnd) inputEnd.value = endStr;

    this.renderDateRangeReport();
  }

  renderDateRangeReport() {
    const inputStart = document.getElementById('reportStartDate');
    const inputEnd = document.getElementById('reportEndDate');
    if (!inputStart || !inputEnd) return;

    let start = inputStart.value;
    let end = inputEnd.value;

    if (!start) start = new Date().toISOString().split('T')[0];
    if (!end) end = start;

    if (start > end) {
      const temp = start;
      start = end;
      end = temp;
      inputStart.value = start;
      inputEnd.value = end;
    }

    const rangeSales = this.db.sales.filter(s => {
      const sDate = s.date.split('T')[0];
      return sDate >= start && sDate <= end;
    });

    let totalSales = 0;
    let totalCost = 0;
    let cashSales = 0;
    let cardSales = 0;
    let transferSales = 0;
    let creditSales = 0;
    const productStats = {};

    rangeSales.forEach(s => {
      totalSales += s.total;

      let saleCost = s.totalCost;
      if (saleCost === undefined || saleCost === null) {
        saleCost = s.items.reduce((sum, item) => sum + (item.product.cost * item.qty), 0);
      }
      totalCost += saleCost;

      if (s.method === 'efectivo') cashSales += s.total;
      else if (s.method === 'tarjeta') cardSales += s.total;
      else if (s.method === 'transferencia') transferSales += s.total;
      else if (s.method === 'fiado') creditSales += s.total;

      s.items.forEach(i => {
        if (!productStats[i.product.name]) {
          productStats[i.product.name] = { qty: 0, subtotal: 0 };
        }
        productStats[i.product.name].qty += i.qty;
        productStats[i.product.name].subtotal += i.subtotal;
      });
    });

    const rangeExpenses = this.db.cashMovements.filter(m => {
      const mDate = m.date.split('T')[0];
      return m.type === 'expense' && mDate >= start && mDate <= end;
    });
    const totalExpenses = rangeExpenses.reduce((sum, m) => sum + m.amount, 0);

    const grossProfit = totalSales - totalCost;
    const netProfit = grossProfit - totalExpenses;
    const profitMargin = totalSales > 0 ? ((grossProfit / totalSales) * 100).toFixed(1) : '0';

    this.currentRangeReport = {
      start,
      end,
      ticketsCount: rangeSales.length,
      totalSales,
      totalCost,
      grossProfit,
      totalExpenses,
      netProfit,
      profitMargin,
      cashSales,
      cardSales,
      transferSales,
      creditSales
    };

    const elSales = document.getElementById('rangeStatSales');
    const elTickets = document.getElementById('rangeStatTicketsCount');
    const elCost = document.getElementById('rangeStatCost');
    const elExpenses = document.getElementById('rangeStatExpenses');
    const elProfit = document.getElementById('rangeStatProfit');
    const elMargin = document.getElementById('rangeStatMargin');
    const elDetails = document.getElementById('rangeReportDetails');

    if (elSales) elSales.textContent = `$${totalSales.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elTickets) elTickets.textContent = `${rangeSales.length} venta${rangeSales.length === 1 ? '' : 's'} en el periodo`;
    if (elCost) elCost.textContent = `$${totalCost.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elExpenses) elExpenses.textContent = `-$${totalExpenses.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (elProfit) {
      elProfit.textContent = `$${netProfit.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      elProfit.style.color = netProfit >= 0 ? 'var(--emerald-light)' : 'var(--rose)';
    }
    if (elMargin) elMargin.textContent = `Margen Promedio: +${profitMargin}%`;

    if (elDetails) {
      const topProducts = Object.entries(productStats)
        .sort((a, b) => b[1].qty - a[1].qty)
        .slice(0, 5);

      let topProductsHtml = '';
      if (topProducts.length > 0) {
        topProductsHtml = topProducts.map(([name, data], idx) => `
          <div style="display:flex; justify-content:space-between; padding:4px 0; font-size:0.78rem; border-bottom:1px solid rgba(255,255,255,0.03);">
            <span>${idx + 1}. ${name}</span>
            <strong style="color:var(--emerald-light);">${data.qty} pzas ($${data.subtotal.toFixed(2)})</strong>
          </div>
        `).join('');
      } else {
        topProductsHtml = '<div style="font-size:0.75rem; color:var(--text-muted);">Sin ventas registradas en este periodo.</div>';
      }

      elDetails.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
          <div>
            <div style="font-weight:700; color:#fff; margin-bottom:8px; font-size:0.85rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:4px;">
              💳 Cobros por Método en este Periodo:
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span>💵 Efectivo:</span> <strong>$${cashSales.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span>💳 Tarjeta:</span> <strong>$${cardSales.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span>📲 Transferencia SPEI:</span> <strong>$${transferSales.toFixed(2)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
              <span>📒 Fiados otorgados:</span> <strong style="color:var(--rose);">$${creditSales.toFixed(2)}</strong>
            </div>
            <div style="border-top:1px dashed rgba(255,255,255,0.1); margin-top:8px; padding-top:6px; display:flex; justify-content:space-between; color:var(--emerald-light); font-weight:700;">
              <span>Ganancia Bruta (sobre venta):</span>
              <span>+$${grossProfit.toFixed(2)}</span>
            </div>
          </div>

          <div>
            <div style="font-weight:700; color:#fff; margin-bottom:8px; font-size:0.85rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:4px;">
              🏆 Productos Estrella de este Periodo:
            </div>
            ${topProductsHtml}
          </div>
        </div>
      `;
    }
  }

  sendRangeReportWhatsApp() {
    if (!this.currentRangeReport) return;
    const r = this.currentRangeReport;

    let text = `*📈 REPORTE DE GANANCIAS - ${this.db.storeName.toUpperCase()}*\n`;
    text += `📅 *Periodo:* ${r.start} al ${r.end}\n\n`;
    text += `🛒 *Tickets / Ventas:* ${r.ticketsCount}\n`;
    text += `💵 *Ventas Totales:* $${r.totalSales.toFixed(2)} MXN\n`;
    text += `📦 *Costo de Mercancía:* -$${r.totalCost.toFixed(2)} MXN\n`;
    text += `💸 *Gastos del Periodo:* -$${r.totalExpenses.toFixed(2)} MXN\n\n`;
    text += `✨ *GANANCIA NETA REAL:* *$${r.netProfit.toFixed(2)} MXN*\n`;
    text += `📊 *Margen Promedio:* +${r.profitMargin}%\n\n`;
    text += `*Cobros por Método:*\n`;
    text += `• Efectivo: $${r.cashSales.toFixed(2)}\n`;
    text += `• Tarjeta: $${r.cardSales.toFixed(2)}\n`;
    text += `• Transferencia: $${r.transferSales.toFixed(2)}\n`;
    text += `• Fiado: $${r.creditSales.toFixed(2)}\n\n`;
    text += `Reporte generado automáticamente desde TiendaControl PRO 🏪`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  promptInitialFund() {
    const current = this.db.cash.initialFund || 500;
    const input = prompt('Introduce el dinero de fondo con el que abrió la caja hoy ($ MXN):', current.toString());
    if (input !== null) {
      const val = parseFloat(input);
      if (!isNaN(val) && val >= 0) {
        this.db.cash.initialFund = val;
        this.saveDatabase();
        this.renderCashSummary();
        this.showToast(`Fondo de caja actualizado a $${val.toFixed(2)}`);
      } else {
        this.showToast('Monto inválido', true);
      }
    }
  }

  openCashMovementModal(type = 'expense') {
    document.getElementById('cashMoveType').value = type;
    document.getElementById('cashMoveAmount').value = '';
    document.getElementById('cashMoveConcept').value = '';
    this.openModal('modalCashMovement');
    setTimeout(() => {
      document.getElementById('cashMoveAmount').focus();
    }, 150);
  }

  saveCashMovement() {
    const type = document.getElementById('cashMoveType').value;
    const amount = parseFloat(document.getElementById('cashMoveAmount').value) || 0;
    const concept = document.getElementById('cashMoveConcept').value.trim();
    const category = document.getElementById('cashMoveCategory').value;

    if (amount <= 0 || !concept) {
      this.showToast('Introduce un monto mayor a cero y el concepto del gasto', true);
      return;
    }

    this.db.cashMovements.push({
      type: type,
      amount: amount,
      concept: `[${category}] ${concept}`,
      date: new Date().toISOString()
    });

    this.saveDatabase();
    this.closeModal('modalCashMovement');
    this.renderCashSummary();
    this.showToast(`Gasto de caja registrado: -$${amount.toFixed(2)}`);
  }

  generateCashCutSummary() {
    const todayStr = new Date().toISOString().split('T')[0];
    const todaySales = this.db.sales.filter(s => s.date.startsWith(todayStr));
    const totalSalesAmount = todaySales.reduce((acc, s) => acc + s.total, 0);
    const totalProfit = todaySales.reduce((acc, s) => acc + (s.netProfit || 0), 0);

    let cashSales = 0, cardSales = 0, transferSales = 0, creditSales = 0;
    todaySales.forEach(s => {
      if (s.method === 'efectivo') cashSales += s.total;
      else if (s.method === 'tarjeta') cardSales += s.total;
      else if (s.method === 'transferencia') transferSales += s.total;
      else if (s.method === 'fiado') creditSales += s.total;
    });

    const todayPayments = this.db.cashMovements
      .filter(m => m.type === 'credit_payment' && m.date.startsWith(todayStr))
      .reduce((acc, m) => acc + m.amount, 0);

    const todayExpenses = this.db.cashMovements
      .filter(m => m.type === 'expense' && m.date.startsWith(todayStr));
    const totalExpenses = todayExpenses.reduce((acc, m) => acc + m.amount, 0);

    const initialFund = this.db.cash.initialFund || 0;
    const expectedInDrawer = initialFund + cashSales + todayPayments - totalExpenses;

    const preview = document.getElementById('corteReceiptPreview');
    if (!preview) return;

    let expensesListHtml = todayExpenses.map(e => `
      <div style="display:flex; justify-content:space-between; font-size:0.75rem;">
        <span>• ${e.concept}</span>
        <span>-$${e.amount.toFixed(2)}</span>
      </div>
    `).join('');

    if (!expensesListHtml) {
      expensesListHtml = '<div style="font-size:0.75rem; color:#777;">Sin gastos registrados hoy</div>';
    }

    preview.innerHTML = `
      <div style="text-align:center; border-bottom:1px dashed #444; padding-bottom:8px; margin-bottom:8px;">
        <div style="font-weight:900; font-size:1.15rem;">✂️ CORTE DE CAJA DIARIO</div>
        <div style="font-weight:bold; font-size:0.95rem;">${this.db.storeName.toUpperCase()}</div>
        <div style="font-size:0.72rem; color:#555;">Fecha: ${new Date().toLocaleDateString('es-MX', { dateStyle: 'full' })}</div>
        <div style="font-size:0.72rem; color:#555;">Hora de corte: ${new Date().toLocaleTimeString('es-MX')}</div>
      </div>

      <div style="border-bottom:1px dashed #444; padding-bottom:8px; margin-bottom:8px; font-size:0.8rem;">
        <div style="display:flex; justify-content:space-between;"><span>(+) Fondo Inicial:</span> <strong>$${initialFund.toFixed(2)}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>(+) Ventas Efectivo:</span> <strong>$${cashSales.toFixed(2)}</strong></div>
        <div style="display:flex; justify-content:space-between;"><span>(+) Abonos Fiados:</span> <strong>$${todayPayments.toFixed(2)}</strong></div>
        <div style="display:flex; justify-content:space-between; color:#B91C1C;"><span>(-) Salidas / Gastos:</span> <strong>-$${totalExpenses.toFixed(2)}</strong></div>
        
        <div style="border-top:1px solid #ddd; margin-top:6px; padding-top:6px; display:flex; justify-content:space-between; font-size:1.05rem; font-weight:900; color:#047857;">
          <span>DINERO EN CAJÓN:</span>
          <span>$${expectedInDrawer.toFixed(2)} MXN</span>
        </div>
      </div>

      <div style="border-bottom:1px dashed #444; padding-bottom:8px; margin-bottom:8px; font-size:0.8rem;">
        <div style="font-weight:bold; margin-bottom:4px;">Otros Medios de Pago:</div>
        <div style="display:flex; justify-content:space-between;"><span>• Tarjeta Bancaria:</span> <span>$${cardSales.toFixed(2)}</span></div>
        <div style="display:flex; justify-content:space-between;"><span>• Transferencia/SPEI:</span> <span>$${transferSales.toFixed(2)}</span></div>
        <div style="display:flex; justify-content:space-between;"><span>• Fiado del día:</span> <span>$${creditSales.toFixed(2)}</span></div>
        <div style="display:flex; justify-content:space-between; font-weight:bold; margin-top:4px;">
          <span>VENTAS TOTALES DEL DÍA:</span> <span>$${totalSalesAmount.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; color:#047857; font-weight:bold;">
          <span>GANANCIA NETA ESTIMADA:</span> <span>$${totalProfit.toFixed(2)}</span>
        </div>
      </div>

      <div style="margin-bottom:8px;">
        <div style="font-weight:bold; font-size:0.8rem; margin-bottom:4px;">Desglose de Gastos del Día:</div>
        ${expensesListHtml}
      </div>

      <div style="text-align:center; font-size:0.75rem; color:#777; border-top:1px dashed #444; padding-top:8px;">
        Corte generado con éxito &bull; Turno Cerrado
      </div>
    `;

    this.currentCorteData = {
      date: todayStr,
      initialFund,
      cashSales,
      cardSales,
      transferSales,
      creditSales,
      totalSales: totalSalesAmount,
      totalExpenses,
      expectedInDrawer,
      totalProfit
    };

    this.openModal('modalCorteCaja');
  }

  sendCorteViaWhatsApp() {
    if (!this.currentCorteData) return;
    const c = this.currentCorteData;

    let text = `*✂️ CORTE DE CAJA - ${this.db.storeName.toUpperCase()}*\n`;
    text += `📅 Fecha: ${new Date().toLocaleDateString('es-MX')}\n\n`;
    text += `💵 *Fondo Inicial:* $${c.initialFund.toFixed(2)}\n`;
    text += `📈 *Ventas Totales:* $${c.totalSales.toFixed(2)}\n`;
    text += `  • Efectivo: $${c.cashSales.toFixed(2)}\n`;
    text += `  • Tarjeta: $${c.cardSales.toFixed(2)}\n`;
    text += `  • Transferencia: $${c.transferSales.toFixed(2)}\n`;
    text += `  • Fiado: $${c.creditSales.toFixed(2)}\n`;
    text += `💸 *Gastos del Día:* -$${c.totalExpenses.toFixed(2)}\n\n`;
    text += `💰 *EFECTIVO ESPERADO EN CAJÓN:* *$${c.expectedInDrawer.toFixed(2)} MXN*\n`;
    text += `✨ *Ganancia Neta Estimada:* $${c.totalProfit.toFixed(2)} MXN\n`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // ==========================================================================
  // 11. ESCÁNER DE CÓDIGO DE BARRAS CON CÁMARA
  // ==========================================================================
  async openScanner() {
    this.openModal('modalScanner');
    const video = document.getElementById('scannerVideo');

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.scannerStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        video.srcObject = this.scannerStream;
        video.play();
        this.startBarcodeLoop();
      }
    } catch (err) {
      console.warn('Cámara no disponible o denegada:', err);
    }
  }

  closeScanner() {
    this.closeModal('modalScanner');
    if (this.scannerStream) {
      this.scannerStream.getTracks().forEach(track => track.stop());
      this.scannerStream = null;
    }
  }

  startBarcodeLoop() {
    if (!('BarcodeDetector' in window)) {
      return; // Navegador no soporta BarcodeDetector nativo; usuario usa input manual
    }

    const detector = new BarcodeDetector({ formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128', 'qr_code'] });
    const video = document.getElementById('scannerVideo');

    const checkFrame = async () => {
      if (!this.scannerStream || !video) return;

      try {
        const barcodes = await detector.detect(video);
        if (barcodes.length > 0) {
          const code = barcodes[0].rawValue;
          this.playBeep(1200, 0.15);
          this.handleScannedBarcode(code);
          this.closeScanner();
          return;
        }
      } catch (e) {}

      requestAnimationFrame(checkFrame);
    };

    requestAnimationFrame(checkFrame);
  }

  handleScannedBarcode(code) {
    // Si estamos en modal de nuevo producto, asignar el código
    const prodModal = document.getElementById('modalProduct');
    if (prodModal && prodModal.classList.contains('active')) {
      document.getElementById('prodFormBarcode').value = code;
      this.showToast(`Código asignado: ${code}`);
      return;
    }

    // Si estamos en POS o vista general, buscar producto
    const prod = this.db.products.find(p => p.barcode === code);
    if (prod) {
      this.addToCart(prod.id);
      this.showToast(`Agregado: ${prod.name}`);
    } else {
      this.showToast(`Código no encontrado (${code}). ¿Deseas registrarlo?`, true);
      if (confirm(`El código "${code}" no está registrado. ¿Deseas registrar este nuevo producto ahora?`)) {
        this.openProductModal();
        document.getElementById('prodFormBarcode').value = code;
      }
    }
  }

  // ==========================================================================
  // 12. RESPALDO Y RESTAURACIÓN DE LA BASE DE DATOS
  // ==========================================================================
  exportBackup() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.db, null, 2));
    const dlAnchor = document.createElement('a');
    const today = new Date().toISOString().split('T')[0];
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `tiendacontrol_respaldo_${today}.json`);
    dlAnchor.click();
    this.showToast('Copia de respaldo descargada');
  }

  importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.products && imported.customers) {
          this.db = imported;
          this.saveDatabase();
          this.showToast('¡Base de datos restaurada con éxito!');
          setTimeout(() => location.reload(), 800);
        } else {
          this.showToast('El archivo no contiene un respaldo válido de TiendaControl', true);
        }
      } catch (err) {
        this.showToast('Error al leer el archivo de respaldo', true);
      }
    };
    reader.readAsText(file);
  }

  resetFactoryDefaults() {
    if (confirm('⚠️ ¿Estás seguro de restablecer todos los productos, clientes y ventas a los valores originales de fábrica? Se perderán las modificaciones no respaldadas.')) {
      this.initDefaultDatabase();
      this.showToast('Datos reiniciados a los valores de fábrica');
      setTimeout(() => location.reload(), 600);
    }
  }

  // ==========================================================================
  // 13. PWA Y MODO OFFLINE
  // ==========================================================================

  // ==========================================================================
  // 14. FUNCIONALIDAD 1: VENTA LIBRE / PRODUCTO RÁPIDO CON DESCRIPCIÓN
  // ==========================================================================
  openQuickSaleModal() {
    document.getElementById('quickSaleConcept').value = '';
    document.getElementById('quickSalePrice').value = '';
    document.getElementById('quickSaleCost').value = '';
    this.openModal('modalQuickSale');
    setTimeout(() => {
      document.getElementById('quickSaleConcept').focus();
    }, 150);
  }

  setQuickSalePreset(concept, price, cost = 0) {
    document.getElementById('quickSaleConcept').value = concept;
    document.getElementById('quickSalePrice').value = price.toFixed(2);
    document.getElementById('quickSaleCost').value = cost.toFixed(2);
  }

  addQuickSaleToCart() {
    const concept = document.getElementById('quickSaleConcept').value.trim();
    const price = parseFloat(document.getElementById('quickSalePrice').value) || 0;
    const cost = parseFloat(document.getElementById('quickSaleCost').value) || 0;

    if (!concept || price <= 0) {
      this.showToast('Introduce la descripción y el precio del artículo', true);
      return;
    }

    const quickItem = {
      id: 'quick_' + Date.now(),
      barcode: '',
      name: `⚡ ${concept}`,
      category: 'Venta Libre',
      unit: 'pza',
      cost: cost,
      price: price,
      stock: 999,
      minStock: 0
    };

    this.cart.push({
      product: quickItem,
      qty: 1,
      subtotal: price
    });

    this.playBeep(980, 0.1);
    this.closeModal('modalQuickSale');
    this.renderCart();
    this.showToast(`Agregado: ${concept} ($${price.toFixed(2)})`);
  }

  // ==========================================================================
  // 15. FUNCIONALIDAD 2: CALCULADORA DE GRANEL Y BÁSCULA
  // ==========================================================================
  openBulkModal(productId) {
    const prod = this.db.products.find(p => p.id === productId);
    if (!prod) return;

    this.currentBulkProduct = prod;
    this.bulkMode = 'money'; // 'money' o 'weight'

    document.getElementById('bulkModalTitle').textContent = `⚖️ Granel: ${prod.name}`;
    document.getElementById('bulkProdName').textContent = prod.name;
    document.getElementById('bulkPricePerKgDisplay').textContent = `$${prod.price.toFixed(2)}/kg`;

    document.getElementById('bulkInputMoney').value = '20';
    document.getElementById('bulkInputWeight').value = '';

    this.switchBulkMode('money');
    this.recalculateBulk();
    this.openModal('modalBulkSale');
  }

  switchBulkMode(mode) {
    this.bulkMode = mode;
    const tabMoney = document.getElementById('tabBulkByMoney');
    const tabWeight = document.getElementById('tabBulkByWeight');
    const secMoney = document.getElementById('sectionBulkMoney');
    const secWeight = document.getElementById('sectionBulkWeight');

    if (mode === 'money') {
      tabMoney.classList.add('active');
      tabWeight.classList.remove('active');
      secMoney.style.display = 'block';
      secWeight.style.display = 'none';
      document.getElementById('bulkInputMoney').focus();
    } else {
      tabWeight.classList.add('active');
      tabMoney.classList.remove('active');
      secWeight.style.display = 'block';
      secMoney.style.display = 'none';
      if (!document.getElementById('bulkInputWeight').value) {
        document.getElementById('bulkInputWeight').value = '0.500';
      }
      document.getElementById('bulkInputWeight').focus();
    }
    this.recalculateBulk();
  }

  setBulkMoneyQuick(amount) {
    document.getElementById('bulkInputMoney').value = amount;
    this.recalculateBulk();
  }

  setBulkWeightQuick(weight) {
    document.getElementById('bulkInputWeight').value = weight.toFixed(3);
    this.recalculateBulk();
  }

  recalculateBulk() {
    if (!this.currentBulkProduct) return;
    const pricePerKg = this.currentBulkProduct.price;

    let total = 0;
    let weight = 0;

    if (this.bulkMode === 'money') {
      total = parseFloat(document.getElementById('bulkInputMoney').value) || 0;
      weight = pricePerKg > 0 ? (total / pricePerKg) : 0;
    } else {
      weight = parseFloat(document.getElementById('bulkInputWeight').value) || 0;
      total = weight * pricePerKg;
    }

    this.currentBulkCalculated = { weight, total };

    document.getElementById('bulkCalculatedSubtext').textContent = `${weight.toFixed(3)} kg (${Math.round(weight * 1000)} gramos)`;
    document.getElementById('bulkCalculatedTotal').textContent = `$${total.toFixed(2)}`;
  }

  addBulkProductToCart() {
    if (!this.currentBulkProduct || !this.currentBulkCalculated) return;
    const { weight, total } = this.currentBulkCalculated;

    if (total <= 0 || weight <= 0) {
      this.showToast('Introduce un monto o peso válido', true);
      return;
    }

    const prod = this.currentBulkProduct;
    const customItem = {
      ...prod,
      name: `${prod.name} (${weight.toFixed(3)}kg)`
    };

    this.cart.push({
      product: customItem,
      qty: 1,
      subtotal: total
    });

    this.playBeep(980, 0.1);
    this.closeModal('modalBulkSale');
    this.renderCart();
    this.showToast(`Agregado: ${customItem.name} ($${total.toFixed(2)})`);
  }

  // ==========================================================================
  // 16. FUNCIONALIDAD 3: RECEPCIÓN DE MERCANCÍA / FACTURAS A PROVEEDORES
  // ==========================================================================
  openRestockModal() {
    const suppSelect = document.getElementById('restockSupplierSelect');
    const prodSelect = document.getElementById('restockProductSelect');

    suppSelect.innerHTML = this.db.suppliers.map(s => `
      <option value="${s.id}">${s.company} (${s.contact || 'Preventista'})</option>
    `).join('');

    prodSelect.innerHTML = this.db.products.map(p => `
      <option value="${p.id}">${p.name} (Stock actual: ${p.stock} ${p.unit})</option>
    `).join('');

    // Pre-cargar costo del primer producto
    if (this.db.products.length > 0) {
      document.getElementById('restockCost').value = this.db.products[0].cost.toFixed(2);
    }

    document.getElementById('restockQty').value = '12';
    document.getElementById('restockInvoiceNumber').value = '';
    this.recalculateRestockTotal();
    this.openModal('modalRestock');
  }

  recalculateRestockTotal() {
    const qty = parseFloat(document.getElementById('restockQty').value) || 0;
    const cost = parseFloat(document.getElementById('restockCost').value) || 0;
    const total = qty * cost;
    document.getElementById('restockTotalDisplay').textContent = `$${total.toFixed(2)}`;
  }

  saveRestockEntry() {
    const suppId = document.getElementById('restockSupplierSelect').value;
    const prodId = document.getElementById('restockProductSelect').value;
    const qty = parseFloat(document.getElementById('restockQty').value) || 0;
    const cost = parseFloat(document.getElementById('restockCost').value) || 0;
    const paymentMethod = document.getElementById('restockPaymentMethod').value;
    const invoice = document.getElementById('restockInvoiceNumber').value.trim();

    if (qty <= 0 || cost <= 0) {
      this.showToast('Cantidad y costo deben ser mayores a cero', true);
      return;
    }

    const prod = this.db.products.find(p => p.id === prodId);
    const supp = this.db.suppliers.find(s => s.id === suppId);
    if (!prod || !supp) return;

    // 1. Aumentar stock y actualizar costo de catálogo
    prod.stock += qty;
    prod.cost = cost;

    const totalAmount = qty * cost;

    // 2. Si se pagó con efectivo de caja, registrar salida
    if (paymentMethod === 'cash_drawer') {
      this.db.cashMovements.push({
        type: 'expense',
        amount: totalAmount,
        concept: `[Proveedor] Pago mercancía ${qty}x ${prod.name} (${supp.company})`,
        date: new Date().toISOString()
      });
    }

    // 3. Registrar compra en historial
    this.db.purchases.push({
      id: 'pur_' + Date.now(),
      supplier: supp.company,
      product: prod.name,
      qty,
      cost,
      total: totalAmount,
      paymentMethod,
      invoice: invoice || 'S/N',
      date: new Date().toISOString()
    });

    this.saveDatabase();
    this.closeModal('modalRestock');
    this.renderInventoryTable();
    this.renderCashSummary();
    this.playBeep(1200, 0.15);
    this.showToast(`¡Mercancía recibida! Stock de ${prod.name}: ${prod.stock} ${prod.unit}`);
  }

  // ==========================================================================
  // 17. FUNCIONALIDAD 4: CONTROL DE CADUCIDADES & MERMAS
  // ==========================================================================
  openExpirationsModal() {
    const list = document.getElementById('expirationsListContainer');
    const prodSelect = document.getElementById('wasteProductSelect');

    // Popular selector de mermas
    prodSelect.innerHTML = this.db.products.map(p => `
      <option value="${p.id}">${p.name} (Stock: ${p.stock} ${p.unit})</option>
    `).join('');

    // Filtrar productos con fecha de caducidad
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];

    const expProducts = this.db.products
      .filter(p => p.expDate)
      .map(p => {
        const exp = new Date(p.expDate);
        const diffTime = exp.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return { ...p, diffDays };
      })
      .sort((a, b) => a.diffDays - b.diffDays);

    if (expProducts.length === 0) {
      list.innerHTML = `
        <div style="text-align:center; padding:20px; color:var(--text-muted); font-size:0.82rem;">
          No hay productos con fecha de caducidad próxima registrada. Puedes asignarla al editar cada producto.
        </div>
      `;
    } else {
      list.innerHTML = expProducts.map(p => {
        let badge = '';
        if (p.diffDays < 0) {
          badge = `<span class="badge-exp-expired">VENCIDO hace ${Math.abs(p.diffDays)} días</span>`;
        } else if (p.diffDays <= 3) {
          badge = `<span class="badge-exp-expired">¡VENCE EN ${p.diffDays} DÍAS!</span>`;
        } else if (p.diffDays <= 7) {
          badge = `<span class="badge-exp-soon">Vence en ${p.diffDays} días</span>`;
        } else {
          badge = `<span style="font-size:0.7rem; color:var(--text-muted);">Vence: ${p.expDate}</span>`;
        }

        return `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
            <div>
              <div style="font-weight:700; color:#fff; font-size:0.85rem;">${p.name}</div>
              <div style="font-size:0.72rem; color:var(--text-secondary);">Stock: <strong>${p.stock} ${p.unit}</strong></div>
            </div>
            <div>${badge}</div>
          </div>
        `;
      }).join('');
    }

    this.openModal('modalExpirations');
  }

  saveWaste() {
    const prodId = document.getElementById('wasteProductSelect').value;
    const qty = parseFloat(document.getElementById('wasteQty').value) || 0;
    const reason = document.getElementById('wasteReason').value;

    if (qty <= 0) {
      this.showToast('Introduce una cantidad válida de merma', true);
      return;
    }

    const prod = this.db.products.find(p => p.id === prodId);
    if (!prod) return;

    // Descontar del inventario
    prod.stock = Math.max(0, prod.stock - qty);

    this.db.wastes.push({
      id: 'w_' + Date.now(),
      productId: prod.id,
      productName: prod.name,
      qty,
      reason,
      costLost: prod.cost * qty,
      date: new Date().toISOString()
    });

    this.saveDatabase();
    this.closeModal('modalExpirations');
    this.renderInventoryTable();
    this.playBeep(600, 0.15);
    this.showToast(`Merma registrada: -${qty} ${prod.unit} (${reason})`);
  }

  // ==========================================================================
  // 18. FUNCIONALIDAD 5: CONTROL DE TURNOS & CAJEROS
  // ==========================================================================
  openShiftChangeModal() {
    const shift = this.db.currentShift;
    document.getElementById('shiftCurrentNameDisplay').textContent = shift.name;

    // Calcular ventas cobradas en este turno
    const shiftSales = this.db.sales.filter(s => s.date >= shift.startedAt);
    const totalShiftSales = shiftSales.reduce((acc, s) => acc + s.total, 0);

    // Calcular efectivo en cajón en este momento
    const todayStr = new Date().toISOString().split('T')[0];
    const todayCashSales = this.db.sales
      .filter(s => s.date.startsWith(todayStr) && s.method === 'efectivo')
      .reduce((acc, s) => acc + s.total, 0);
    const todayPayments = this.db.cashMovements
      .filter(m => m.type === 'credit_payment' && m.date.startsWith(todayStr))
      .reduce((acc, m) => acc + m.amount, 0);
    const todayExpenses = this.db.cashMovements
      .filter(m => m.type === 'expense' && m.date.startsWith(todayStr))
      .reduce((acc, m) => acc + m.amount, 0);
    const currentDrawerCash = (this.db.cash.initialFund || 0) + todayCashSales + todayPayments - todayExpenses;

    document.getElementById('shiftCurrentSalesDisplay').textContent = `$${totalShiftSales.toFixed(2)} (${shiftSales.length} tickets)`;
    document.getElementById('shiftCurrentCashDisplay').textContent = `$${currentDrawerCash.toFixed(2)}`;
    document.getElementById('shiftNewNameInput').value = '';

    this.openModal('modalShiftChange');
  }

  confirmShiftChange() {
    const newName = document.getElementById('shiftNewNameInput').value.trim();
    if (!newName) {
      this.showToast('Introduce el nombre del nuevo turno o cajero', true);
      return;
    }

    const oldShift = this.db.currentShift;
    const shiftSales = this.db.sales.filter(s => s.date >= oldShift.startedAt);
    const totalShiftSales = shiftSales.reduce((acc, s) => acc + s.total, 0);

    // Guardar turno anterior en historial
    this.db.shiftHistory.push({
      ...oldShift,
      endedAt: new Date().toISOString(),
      salesTotal: totalShiftSales,
      ticketsCount: shiftSales.length
    });

    // Iniciar nuevo turno
    this.db.currentShift = {
      id: 'shift_' + Date.now(),
      name: newName,
      cashier: newName,
      startedAt: new Date().toISOString()
    };

    this.saveDatabase();
    this.closeModal('modalShiftChange');
    this.updateShiftHeader();
    this.playBeep(1200, 0.2);
    this.showToast(`Turno cambiado: ${newName}`);
  }

  updateShiftHeader() {
    const display = document.getElementById('currentShiftDisplay');
    if (display && this.db.currentShift) {
      display.textContent = this.db.currentShift.name;
    }
  }


  // ==========================================================================
  // 19. SISTEMA DE LICENCIA Y PERIODO DE PRUEBA DE 7 DÍAS
  // ==========================================================================
  getTrialDaysRemaining() {
    if (!this.db.license) return 7;
    if (this.db.license.isActivated) return 999;

    const msPerDay = 1000 * 60 * 60 * 24;
    const now = Date.now();
    const elapsedMs = now - (this.db.license.installTimestamp || now);
    const daysElapsed = elapsedMs / msPerDay;
    const daysLeft = Math.ceil(7 - daysElapsed);
    return Math.max(0, daysLeft);
  }

  isTrialExpired() {
    if (!this.db.license) return false;
    if (this.db.license.isActivated) return false;
    return this.getTrialDaysRemaining() <= 0;
  }

  checkLicenseStatus() {
    const isActivated = this.db.license && this.db.license.isActivated;
    const badge = document.getElementById('btnHeaderLicense');
    const icon = document.getElementById('licenseStatusIcon');
    const label = document.getElementById('licenseStatusLabel');

    if (isActivated) {
      if (badge) {
        badge.style.background = 'rgba(16,185,129,0.15)';
        badge.style.borderColor = 'rgba(16,185,129,0.35)';
        badge.style.color = 'var(--emerald-light)';
      }
      if (icon) icon.textContent = '⭐';
      if (label) label.textContent = 'Licencia PRO Activa';
    } else {
      const daysLeft = this.getTrialDaysRemaining();
      if (icon) icon.textContent = '⏳';
      if (label) label.textContent = `Prueba: ${daysLeft} día${daysLeft === 1 ? '' : 's'}`;

      if (daysLeft <= 0) {
        // PERIODO EXPIRADO (DÍA 8 EN ADELANTE): BLOQUEO TOTAL DE LA APLICACIÓN
        this.openActivationModal(true);
      }
    }
  }

  openActivationModal(isLock = false) {
    const isActivated = this.db.license && this.db.license.isActivated;
    const closeBtn = document.getElementById('btnCloseActivationModal');
    const title = document.getElementById('activationModalTitle');
    const headline = document.getElementById('activationHeadline');
    const desc = document.getElementById('activationDescription');
    const icon = document.getElementById('activationIcon');
    const daysNotice = document.getElementById('activationDaysLeftNotice');
    const displayStore = document.getElementById('displayStoreId');

    if (displayStore && this.db.license) {
      displayStore.textContent = this.db.license.storeId;
    }

    if (isActivated) {
      title.textContent = '⭐ Licencia Permanente Activa';
      headline.textContent = '¡Tu Tienda está 100% Activada!';
      desc.textContent = `Tienes acceso ilimitado a todas las funciones de TiendaControl PRO. Clave activa: ${this.db.license.activationKey || 'Válida'}.`;
      icon.textContent = '🎉';
      if (closeBtn) closeBtn.style.display = 'block';
      if (daysNotice) daysNotice.style.display = 'none';
    } else if (isLock || this.isTrialExpired()) {
      title.textContent = '🔒 Periodo de Prueba Finalizado';
      headline.textContent = 'Tu Periodo de 7 Días ha Terminado';
      desc.textContent = 'Esperamos que hayas disfrutado de TiendaControl PRO y de tus cortes diarios. Para seguir utilizándolo y mantener tus datos guardados, introduce tu código de activación.';
      icon.textContent = '🔒';
      if (closeBtn) closeBtn.style.display = 'none'; // No se puede cerrar si venció
      if (daysNotice) {
        daysNotice.style.display = 'block';
        daysNotice.textContent = '⚠️ Tu periodo de prueba ha expirado. Activa tu licencia para continuar.';
        daysNotice.style.color = 'var(--rose)';
      }
    } else {
      const days = this.getTrialDaysRemaining();
      title.textContent = '🔑 Licencia de TiendaControl PRO';
      headline.textContent = 'Periodo de Demostración Activo';
      desc.textContent = 'Disfruta de todas las funciones sin restricciones. Si ya tienes tu clave de activación permanente, puedes ingresarla ahora.';
      icon.textContent = '🏪';
      if (closeBtn) closeBtn.style.display = 'block';
      if (daysNotice) {
        daysNotice.style.display = 'block';
        daysNotice.textContent = `⏳ Te quedan ${days} día${days === 1 ? '' : 's'} de prueba completa.`;
        daysNotice.style.color = 'var(--amber)';
      }
    }

    this.openModal('modalActivation');
  }

  generateLicenseKeyForStore(storeId) {
    const clean = storeId.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    const salt = "TIENDACONTROL_PRO_SECRET_SALT_2026";
    let hash = 0;
    const combined = clean + salt;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    const part1 = (Math.abs(hash) % 8999 + 1000).toString();
    
    let hash2 = 0;
    const combined2 = salt + clean + part1;
    for (let i = 0; i < combined2.length; i++) {
      const char = combined2.charCodeAt(i);
      hash2 = ((hash2 << 5) - hash2) + char;
      hash2 = hash2 & hash2;
    }
    const part2 = (Math.abs(hash2) % 8999 + 1000).toString();
    
    let hash3 = 0;
    const combined3 = part1 + clean + salt + part2;
    for (let i = 0; i < combined3.length; i++) {
      const char = combined3.charCodeAt(i);
      hash3 = ((hash3 << 5) - hash3) + char;
      hash3 = hash3 & hash3;
    }
    const part3 = (Math.abs(hash3) % 8999 + 1000).toString();
    
    return `ACT-${part1}-${part2}-${part3}`;
  }

  activateLicense() {
    const input = document.getElementById('inputActivationKey');
    const entered = (input?.value || '').trim().toUpperCase();

    if (!entered) {
      this.showToast('Por favor escribe tu código de activación', true);
      return;
    }

    const storeId = this.db.license.storeId;
    const expectedKey = this.generateLicenseKeyForStore(storeId);
    const masterKey = 'TIENDA-VIP-2026-PRO';

    if (entered === expectedKey || entered === masterKey) {
      this.db.license.isActivated = true;
      this.db.license.activationKey = entered;
      this.db.license.activatedAt = new Date().toISOString();
      this.saveDatabase();

      this.playBeep(1400, 0.3, 'triangle');
      this.showToast('🎉 ¡Licencia Permanente Activada con Éxito!');
      this.checkLicenseStatus();
      this.closeModal('modalActivation');
    } else {
      this.playBeep(300, 0.2, 'sawtooth');
      this.showToast('❌ Código de activación inválido para esta tienda', true);
    }
  }

  requestActivationWhatsApp() {
    const storeId = this.db.license ? this.db.license.storeId : 'TC-DEMO';
    let text = `¡Hola! Me comunico porque me interesa adquirir la *Licencia Permanente de TiendaControl PRO* para mi tiendita 🏪✨\n\n`;
    text += `Mi Código de Tienda es: *${storeId}*\n\n`;
    text += `Por favor indícame los métodos de pago para recibir mi código de activación. ¡Muchas gracias!`;

    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
          .then(reg => console.log('ServiceWorker activo:', reg.scope))
          .catch(err => console.log('ServiceWorker no disponible:', err));
      });
    }
  }
}

// Inicializar la aplicación al cargar el DOM
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new TiendaControlApp();
});
