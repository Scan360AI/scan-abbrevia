// ======================================
// HELPER FUNCTIONS
// ======================================
function formatCurrency(value, decimals = 0) {
    if (isNaN(value)) return value;
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}
function formatNumber(value, decimals = 0) {
     if (isNaN(value)) return value;
     return new Intl.NumberFormat('it-IT', { style: 'decimal', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
 }
function formatPercentage(value) {
     if (isNaN(value)) return value;
     return new Intl.NumberFormat('it-IT', { style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value) + '%';
}

function initChart(canvasId, type, data, options) {
     const canvas = document.getElementById(canvasId);
     if (!canvas) { console.error(`Canvas element with ID '${canvasId}' not found.`); return null; }
     const ctx = canvas.getContext('2d');
     const existingChart = Chart.getChart(canvasId);
     if (existingChart) { try { existingChart.destroy(); } catch(e) { console.warn(`Could not destroy previous chart instance for ${canvasId}: ${e}`);} }
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     if (!data || !data.labels || !data.datasets) {
          ctx.fillStyle = '#dc3545'; ctx.font = '14px "Titillium Web", sans-serif'; ctx.textAlign = 'center';
          ctx.fillText('Errore: Dati non disponibili.', canvas.width / 2, canvas.height / 2);
          console.error(`Dati non validi forniti a initChart per ${canvasId}`);
          return null;
      }
     try {
         const newChart = new Chart(ctx, { type: type, data: data, options: options });
         return newChart;
     } catch (error) {
          console.error(`Errore durante la creazione del grafico ${canvasId}:`, error);
          ctx.fillStyle = '#dc3545'; ctx.font = '14px "Titillium Web", sans-serif'; ctx.textAlign = 'center';
          const errorMessage = error.message && typeof error.message === 'string' ? (error.message.length > 100 ? error.message.substring(0, 97) + '...' : error.message) : 'Errore sconosciuto';
          ctx.fillText(`Errore grafico: ${errorMessage}`, canvas.width / 2, canvas.height / 2);
         return null;
     }
 }

// ======================================
// CHART DATA (Bilancio Plus - ABBREVIA S.p.A.)
// ======================================
// Colori Consistenti
 const colorAttuale = 'rgba(74, 105, 189, 0.7)'; // Blu secondario
 const colorAttualeBorder = 'rgba(74, 105, 189, 1)';
 const colorOttimizzato = 'rgba(76, 175, 80, 0.7)'; // Verde successo
 const colorOttimizzatoBorder = 'rgba(76, 175, 80, 1)';

 const ebitdaData = {
     labels: ['Attuale (2024)', 'Post Ottimizzazione'],
     datasets: [{
         label: 'EBITDA (€)', data: [2009458, 2059458],
         backgroundColor: [colorAttuale, colorOttimizzato],
         borderColor: [colorAttualeBorder, colorOttimizzatoBorder], borderWidth: 1
     }]
 };
 const ebitdaMarginData = {
      labels: ['Attuale (2024)', 'Post Ottimizzazione'],
      datasets: [{
          label: 'EBITDA Margin (%)', data: [20.60, 21.12],
          backgroundColor: [colorAttuale, colorOttimizzato],
          borderColor: [colorAttualeBorder, colorOttimizzatoBorder], borderWidth: 1
      }]
  };
  const pfnEbitdaData = {
       labels: ['Attuale (2024)', 'Post Ottimizzazione'],
       datasets: [{
           label: 'PFN/EBITDA', data: [1.00, 0.92],
           backgroundColor: [colorAttuale, colorOttimizzato],
           borderColor: [colorAttualeBorder, colorOttimizzatoBorder], borderWidth: 1
       }]
   };
   const magazzinoData = {
        labels: ['Attuale (2024)', 'Post Ottimizzazione'],
        datasets: [{
            label: 'Leanus Score', data: [3.85, 4.40],
            backgroundColor: [colorAttuale, colorOttimizzato],
            borderColor: [colorAttualeBorder, colorOttimizzatoBorder], borderWidth: 1
        }]
    };

// ======================================
// CHART OPTIONS
// ======================================
const barChartOptions = {
     responsive: true, maintainAspectRatio: false, indexAxis: 'x',
     scales: { y: { beginAtZero: true, ticks: {} }, x: { grid: { display: false }} },
     plugins: { legend: { display: false }, title: { display: false },
         tooltip: {
             callbacks: {
                 label: function(context) {
                     let label = context.dataset.label || ''; if (label) label += ': '; let value = context.parsed.y;
                     if (context.dataset.label.includes('(gg)')) { label += formatNumber(value, 0) + ' gg'; }
                     else if (context.dataset.label.includes('(%)')) { label += formatPercentage(value); }
                     else if (context.dataset.label.includes('Score')) { label += formatNumber(value, 2); }
                     else if (context.dataset.label.includes('PFN/EBITDA')) { label += formatNumber(value, 2); }
                     else { label += formatCurrency(value, 0); }
                     return label;
                 }
             }
         }
     },
     animation: { duration: 400 }
 };
 const ebitdaOptions = { ...barChartOptions, scales: { ...barChartOptions.scales, y: { ...barChartOptions.scales.y, ticks: { callback: function(v) { return formatCurrency(v, 0); } } } } };
 const ebitdaMarginOptions = { ...barChartOptions, scales: { ...barChartOptions.scales, y: { ...barChartOptions.scales.y, suggestedMin: 19, suggestedMax: 22, ticks: { callback: function(v) { return formatPercentage(v); } } } } };
 const pfnEbitdaOptions = { ...barChartOptions, scales: { ...barChartOptions.scales, y: { ...barChartOptions.scales.y, suggestedMin: 0, suggestedMax: 1.2, ticks: { callback: function(v) { return formatNumber(v, 2); } } } } };
 const magazzinoOptions = { ...barChartOptions, scales: { ...barChartOptions.scales, y: { ...barChartOptions.scales.y, suggestedMin: 0, suggestedMax: 5, ticks: { callback: function(v) { return formatNumber(v, 2); } } } } };

// ======================================
// CHART INITIALIZATION & OTHER SCRIPTS
// ======================================
document.addEventListener('DOMContentLoaded', function() {
     console.log("Initializing scripts for Bilancio Plus ABBREVIA S.p.A. (Embedded)...");
     // --- Initialize Charts ---
     try { initChart('ebitdaChart', 'bar', ebitdaData, ebitdaOptions); } catch(e) { console.error("Errore init ebitdaChart:", e); }
     try { initChart('ebitdaMarginChart', 'bar', ebitdaMarginData, ebitdaMarginOptions); } catch(e) { console.error("Errore init ebitdaMarginChart:", e); }
     try { initChart('pfnEbitdaChart', 'bar', pfnEbitdaData, pfnEbitdaOptions); } catch(e) { console.error("Errore init pfnEbitdaChart:", e); }
     try { initChart('magazzinoChart', 'bar', magazzinoData, magazzinoOptions); } catch(e) { console.error("Errore init magazzinoChart:", e); }

     // --- Other Page Scripts ---
     document.getElementById('currentYearSidebar').textContent = new Date().getFullYear();
     const footerYear = document.getElementById('currentYearFooter');
     if (footerYear) footerYear.textContent = new Date().getFullYear();

     const irpScoreValue = 85.81; // ABBREVIA S.p.A. IRP
     const irpHeaderBadge = document.getElementById('irp-header-badge');
     if(irpHeaderBadge) {
         let badgeClass = 'bg-danger';
         if (irpScoreValue >= 40 && irpScoreValue < 60) badgeClass = 'bg-warning text-dark'; else if (irpScoreValue >= 60) badgeClass = 'bg-success';
         irpHeaderBadge.className = `badge ${badgeClass} me-3`;
         irpHeaderBadge.textContent = `IRP: ${irpScoreValue.toFixed(1)}`;
     } else { console.warn("Elemento 'irp-header-badge' non trovato.") }

     if (typeof window.logout !== 'function') { window.logout = function() { console.log("Logout placeholder"); } }
     if (typeof window.printDocument !== 'function') { window.printDocument = function() { window.print(); } }
     console.log("All scripts initialization attempt complete (Embedded).");
 });