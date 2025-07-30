/**
 * SCAN - Strategic Corporate Analysis Navigator
 * Configurazione Dati e Opzioni per Grafici Chart.js
 * Versione 1.2 - Dati Aggiornati per ABBREVIA S.p.A.
 */

// ======================================
// FUNZIONI PER RECUPERARE I DATI SPECIFICI
// ======================================

// --- Dati per Dashboard Esecutiva (dashboard.html) ---
function getTrendRicaviEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendRicaviEbitdaChart (Dashboard)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             {
                 label: "Ricavi (€)",
                 data: [7826607, 9075768, 9752677], // Valori assoluti
                 borderColor: 'rgb(25, 25, 112)',
                 backgroundColor: 'rgba(25, 25, 112, 0.1)',
                 type: 'line', tension: 0.1, yAxisID: 'y', fill: true, pointRadius: 3,
             },
             {
                 label: "EBITDA (€)",
                 data: [1494622, 1625999, 2009458], // Valori assoluti
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.7)',
                 type: 'bar', yAxisID: 'y', barPercentage: 0.6, categoryPercentage: 0.7
             },
              {
                  label: "EBITDA Margin (%)",
                  data: [19.1, 17.9, 20.6], // Percentuale
                  borderColor: 'rgb(217, 140, 0)',
                  backgroundColor: 'transparent',
                  type: 'line', tension: 0.1, yAxisID: 'y1', fill: false, borderDash: [5, 5], pointRadius: 3
              }
        ]
    };
}

function getTrendPfnEbitdaData_Dashboard() {
    // console.log("Fornitura dati per trendPfnEbitdaChart (Dashboard)");
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             {
                 label: "PFN/EBITDA",
                 data: [-0.39, -0.31, 1.00], // Valori del rapporto (PFN positiva = indebitamento)
                 borderColor: 'rgb(77, 140, 87)',
                 backgroundColor: 'rgba(77, 140, 87, 0.2)',
                 tension: 0.1, fill: true, pointRadius: 5, pointHoverRadius: 7,
                 pointBackgroundColor: 'rgb(77, 140, 87)'
             },
              {
                 label: 'Soglia Attenzione (<3x)',
                 data: [3, 3, 3], // Linea target
                 borderColor: 'rgb(255, 193, 7)',
                 borderDash: [5, 5], fill: false, pointRadius: 0, borderWidth: 2,
             }
         ]
     };
}

// --- Dati per Report Dettagliati (report/parteX_*.html) ---

// Dati Parte 1
function getMainMetricsData() {
    // console.log("Fornitura dati per mainMetricsChart (Report Parte 1)");
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Ricavi (€000)", data: [7827, 9076, 9753], backgroundColor: "rgba(25, 25, 112, 0.7)" }, // Dati in migliaia
             { label: "EBITDA (€000)", data: [1495, 1626, 2009], backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Patrimonio Netto (€000)", data: [2050, 1998, 6600], backgroundColor: "rgba(217, 140, 0, 0.7)" }
         ]
     };
}
function getCurrentAssetsLiabilitiesData() {
    // console.log("Fornitura dati per currentAssetsLiabilitiesChart (Report Parte 1)");
    // Dati estratti dai report - corrisponde a Capitale Circolante, Attivo Corrente, Passivo Corrente
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "Attivo Corrente", data: [3480887, 3762961], backgroundColor: "rgba(25, 25, 112, 0.7)" },
             { label: "Passivo Corrente", data: [2260071, 4701161], backgroundColor: "rgba(214, 34, 70, 0.7)" },
             { label: "Capitale Circolante Netto", data: [1220816, -938200], backgroundColor: "rgba(77, 140, 87, 0.7)" }
         ]
     };
}

// Dati Parte 2
function getEconomicTrendData() {
    // console.log("Fornitura dati per economicTrendChart (Report Parte 2)");
    // Uguale a getTrendRicaviEbitdaData_Dashboard ma usa valori in €000 per coerenza con altre tabelle
    const dataAbs = getTrendRicaviEbitdaData_Dashboard();
    dataAbs.datasets[0].data = dataAbs.datasets[0].data.map(v => v ? v / 1000 : null); // Ricavi in K
    dataAbs.datasets[1].data = dataAbs.datasets[1].data.map(v => v ? v / 1000 : null); // EBITDA in K
    dataAbs.datasets[0].label = "Ricavi (€000)";
    dataAbs.datasets[1].label = "EBITDA (€000)";
    return dataAbs;
}
function getMarginalityData() {
    // console.log("Fornitura dati per marginalityChart (Report Parte 2)");
     return {
         labels: ["2022", "2023", "2024"],
         datasets: [
            { label: "Valore Aggiunto %", data: [99.7, 99.7, 99.7], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Margine di Contribuzione %", data: [37.2, 36.0, 40.1], borderColor: "rgba(42, 58, 128, 1)", fill: false },
            { label: "EBITDA %", data: [19.1, 17.9, 20.6], borderColor: "rgba(77, 140, 87, 1)", fill: false },
            { label: "EBIT %", data: [16.6, 14.2, 8.3], borderColor: "rgba(217, 140, 0, 1)", fill: false }
         ]
     };
}
function getProfitabilityIndicesData() {
    // console.log("Fornitura dati per profitabilityIndicesChart (Report Parte 2)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "ROE %", data: [44.47, 46.94, 8.56], borderColor: "rgba(25, 25, 112, 1)", backgroundColor: "rgba(25, 25, 112, 0.2)", fill: true},
            { label: "ROI %", data: [95.87, 85.93, 9.41], borderColor: "rgba(77, 140, 87, 1)", backgroundColor: "rgba(77, 140, 87, 0.2)", fill: true},
            { label: "ROS %", data: [16.6, 14.2, 8.3], borderColor: "rgba(217, 140, 0, 1)", backgroundColor: "rgba(217, 140, 0, 0.2)", fill: true}
        ]
    };
}
function getLeverageData() {
     // console.log("Fornitura dati per leverageChart (Report Parte 2)");
     return {
         labels: ["2023", "2024"],
         datasets: [
             { label: "ROI (%)", data: [85.93, 9.41], backgroundColor: "rgba(25, 25, 112, 0.7)"},
             { label: "ROE (%)", data: [46.94, 8.56], backgroundColor: "rgba(77, 140, 87, 0.7)"}
         ]
     };
}
function getBenchmarkRadarData() {
    // console.log("Fornitura dati per benchmarkRadarChart (Report Parte 2)");
    // Dati normalizzati basati sul posizionamento competitivo
    return {
        labels: ["Crescita Ricavi", "EBITDA Margin", "ROI", "Turnover", "Costo Personale", "PFN/EBITDA", "D/E"],
        datasets: [
            {
                label: "ABBREVIA S.p.A.", // Valori > 100 = Migliore della media
                data: [187, 149, 94, 113, 42, 40, 65], // DATI NORMALIZZATI basati sui report
                backgroundColor: "rgba(25, 25, 112, 0.3)", borderColor: "rgba(25, 25, 112, 1)", borderWidth: 2, pointBackgroundColor: "rgba(25, 25, 112, 1)"
            },
            {
                label: "Media Settore", // Base 100
                data: [100, 100, 100, 100, 100, 100, 100],
                backgroundColor: "rgba(217, 140, 0, 0.3)", borderColor: "rgba(217, 140, 0, 1)", borderWidth: 2, pointBackgroundColor: "rgba(217, 140, 0, 1)"
            }
        ]
    };
}

// Dati Parte 3
function getAssetsData() {
    // console.log("Fornitura dati per assetsChart (Report Parte 3)");
    const originalData = [62651, 126455, 7594208, 0, 2962347, 572381]; // Immob. Mat, Fin, Immat, Magazzino, Crediti, Liquidità
    const total = originalData.reduce((a, b) => a + b, 0);
    return {
        labels: ["Immob. Materiali", "Immob. Finanziarie", "Immob. Immateriali", "Magazzino", "Crediti", "Liquidità"],
        _originalData: originalData, // Valori originali per tooltip
        datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4a69bd", "#F44336", "#FFC107", "#4CAF50", "#6c757d"] // Palette definita
         } ]
    };
}
function getLiabilitiesData() {
    // console.log("Fornitura dati per liabilitiesChart (Report Parte 3)");
    const originalData = [6600157, 0, 2578009, 826230, 261230]; // PN, Debt MLT, Debt BT, Debt Comm., Fondi
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Patrimonio Netto", "Debiti Fin. MLT", "Debiti Fin. BT", "Debiti Comm.", "Fondi"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd", "#6c757d"] // Palette coerente
        } ]
     };
}
function getInvestmentsStructureData() {
    // console.log("Fornitura dati per investmentsStructureChart (Report Parte 3)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
             { label: "Immobilizzazioni", data: [812412, 1049779, 7783314], backgroundColor: "rgba(25, 25, 112, 0.7)", stack: "Stack 0" },
             { label: "Crediti commerciali", data: [2094191, 2725910, 2962347], backgroundColor: "rgba(77, 140, 87, 0.7)", stack: "Stack 0" },
             { label: "Rimanenze", data: [0, 0, 0], backgroundColor: "rgba(217, 140, 0, 0.7)", stack: "Stack 0" },
             { label: "Liquidità", data: [948097, 651088, 572381], backgroundColor: "rgba(79, 109, 122, 0.7)", stack: "Stack 0" }
        ]
    };
}
function getEquityCompositionData() {
    // console.log("Fornitura dati per equityCompositionChart (Report Parte 3)");
    // Dati ottenuti dalla relazione
    const originalData = [200000, 5835345, 564812, 0]; // Capitale Sociale, Riserve, Utile, Utili a nuovo
    const total = originalData.reduce((a, b) => a + b, 0);
     return {
         labels: ["Capitale Sociale", "Riserve", "Utile Esercizio", "Utili a Nuovo"],
         _originalData: originalData,
         datasets: [ {
             data: originalData.map(v => total > 0 ? (v/total)*100 : 0), // Dati %
             backgroundColor: ["#191970", "#4CAF50", "#FFC107", "#4a69bd"]
        } ]
     };
}
function getFinancialDebtSourcesData() {
    // console.log("Fornitura dati per financialDebtSourcesChart (Report Parte 3)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { 
                label: "Debiti Finanziari", 
                data: [365606, 152286, 2578009], 
                backgroundColor: "rgba(214, 34, 70, 0.7)",
                type: "bar",
                yAxisID: 'y'
            },
            { 
                label: "Patrimonio Netto", 
                data: [2049574, 1997898, 6600157], 
                backgroundColor: "rgba(25, 25, 112, 0.7)",
                type: "bar",
                yAxisID: 'y'
            },
            { 
                label: "Rapporto D/E", 
                data: [0.18, 0.08, 0.39], 
                type: "line",
                borderColor: "rgba(77, 140, 87, 1)",
                backgroundColor: "transparent",
                yAxisID: 'y1',
                borderWidth: 2,
                pointBackgroundColor: "rgba(77, 140, 87, 1)",
                fill: false
            }
        ]
    };
}
function getPfnTrendData() {
    // console.log("Fornitura dati per pfnTrendChart (Report Parte 3)");
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "Debiti Finanziari Tot.", data: [365606, 152286, 2578009], type: "bar", backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
             { label: "Liquidità", data: [948097, 651088, 572381], type: "bar", backgroundColor: "rgba(77, 140, 87, 0.7)", yAxisID: 'y'},
             { label: "PFN", data: [-582491, -498802, 2005628], type: "line", borderColor: "rgba(25, 25, 112, 1)", fill: false, yAxisID: 'y' }
         ]
     };
}

// Dati Parte 4
function getDebtSustainabilityData() {
    // console.log("Fornitura dati per debtSustainabilityChart (Report Parte 4)");
     // Valori normalizzati per il grafico radar
     return {
         labels: ["PFN/EBITDA", "D/E", "DSCR", "Oneri Fin./Ricavi", "Cash Flow Op./Ricavi", "Leanus Score"],
         datasets: [
             { label: "ABBREVIA S.p.A.", data: [33, 65, 148, 59, 141, 77], backgroundColor: "rgba(25, 25, 112, 0.2)", borderColor: "rgba(25, 25, 112, 1)" }, // Valori normalizzati basati sui dati reali
             { label: "Target/Benchmark", data: [100, 67, 100, 100, 100, 75], backgroundColor: "rgba(77, 140, 87, 0.2)", borderColor: "rgba(77, 140, 87, 1)" }
         ]
     };
}
function getDebtCostData() { // Grafico Capacità Indebitamento
    // console.log("Fornitura dati per debtCostChart (Report Parte 4)");
    return {
         labels: ["2022", "2023", "2024"],
         datasets: [
             { label: "EBITDA (€000)", data: [1495, 1626, 2009], type: "bar", yAxisID: "y", backgroundColor: "rgba(77, 140, 87, 0.7)" },
             { label: "Capacità Teorica Indeb. (3x EBITDA, €000)", data: [4485, 4878, 6028], type: "line", yAxisID: "y", borderColor: "rgba(25, 25, 112, 1)", fill: false }
         ]
     };
}

// Dati Parte 5
function getWorkingCapitalCycleData() {
    // console.log("Fornitura dati per workingCapitalCycleChart (Report Parte 5)");
    return {
        labels: ["Crediti Clienti (DSO)", "Magazzino (DIO)", "Debiti Fornitori (DPO)", "Ciclo Circolante"],
        datasets: [
            { label: "ABBREVIA S.p.A. (Giorni)", data: [110, 0, 49, 61], backgroundColor: "rgba(25, 25, 112, 0.7)" },
            { label: "Benchmark Settore (Giorni)", data: [90, 0, 60, 30], backgroundColor: "rgba(77, 140, 87, 0.7)" }
        ]
    };
}
function getCashFlowWaterfallData() {
    // console.log("Fornitura dati per cashFlowWaterfallChart (Report Parte 5)");
    // Implementazione con barre semplici per rappresentare la cascata
     return {
         labels: ["EBITDA", "Imposte", "+Δ Circ.", "=CF Op.", "-Invest.", "=FCF", "+Δ Debt", "-Divid.", "=Δ Cassa"],
         datasets: [{
             data: [2009458, -79138, -552000, 1378364, -7920241, -6541877, 2425723, 4037447, -78707],
             backgroundColor: [ // Colori significativi
                 '#4CAF50', // EBITDA (+)
                 '#F44336', // Imposte (-)
                 '#F44336', // Delta Circ. (-)
                 '#4CAF50', // CF Op (+)
                 '#F44336', // Investimenti (-)
                 '#F44336', // FCF (-)
                 '#4CAF50', // Delta Debt (+)
                 '#4CAF50', // Patrimonio Netto (+)
                 '#F44336'  // Delta Cassa (-)
             ]
         }]
     };
}
function getCashFlowTrendData() {
    // console.log("Fornitura dati per cashFlowTrendChart (Report Parte 5)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Cash Flow Operativo", data: [740070, 1354919, 1378364], borderColor: "rgba(77, 140, 87, 1)", fill: true, backgroundColor: "rgba(77, 140, 87, 0.1)"},
            { label: "Cash Flow Investimenti", data: [0, -561999, -7920241], borderColor: "rgba(214, 34, 70, 1)", fill: true, backgroundColor: "rgba(214, 34, 70, 0.1)" },
            { label: "Variazione Netta di Cassa", data: [0, -297009, -78707], borderColor: "rgba(25, 25, 112, 1)", fill: true, backgroundColor: "rgba(25, 25, 112, 0.1)" }
        ]
    };
}
function getCashFlowProjectionData() {
    // console.log("Fornitura dati per cashFlowProjectionChart (Report Parte 5)");
    return {
        labels: ["2024", "2025E", "2026E", "2027E", "2028E"],
        datasets: [
            { label: "Cash Flow Operativo", data: [1378364, 1700000, 2150000, 2400000, 2600000], type: 'bar', backgroundColor: "rgba(79, 109, 122, 0.7)", yAxisID: 'y' },
            { label: "Variazione Debiti Fin.", data: [2425723, -350000, -400000, -450000, -500000], type: 'bar', backgroundColor: "rgba(214, 34, 70, 0.7)", yAxisID: 'y' },
            { label: "Liquidità Finale", data: [572381, 922381, 1472381, 2022381, 2622381], type: 'line', borderColor: "rgba(77, 140, 87, 1)", fill: false, yAxisID: 'y1' }
        ]
    };
}

// Dati Parte 6
function getZscoreData() {
    // console.log("Fornitura dati per zscoreChart (Report Parte 6)");
    return {
        labels: ["2022", "2023", "2024"],
        datasets: [
            { label: "Z-Score", data: [null, null, 3.26], borderColor: "rgba(25, 25, 112, 1)", fill: false },
            { label: "Soglia Sicurezza", data: [2.99, 2.99, 2.99], borderColor: "rgba(77, 140, 87, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 },
            { label: "Soglia Rischio", data: [1.81, 1.81, 1.81], borderColor: "rgba(214, 34, 70, 1)", borderDash: [5, 5], fill: false, pointRadius: 0 }
        ]
    };
}
function getRiskIndicatorsData() {
     // console.log("Fornitura dati per riskIndicatorsChart (Report Parte 6)");
     // Dati normalizzati basati sui valori dell'azienda vs benchmark
    return {
        labels: ["ROI", "ROS", "D/E", "Cop. Immob.", "DSO", "DPO"], 
        datasets: [{
             label: "ABBREVIA S.p.A.",
             data: [94, 119, 65, 85, 82, 82], // Normalizzati dai dati dei report
             backgroundColor: "rgba(136, 141, 194, 0.5)", borderColor: "rgba(97, 103, 173, 1)", borderWidth: 2
            }, {
             label: "Target/Benchmark",
             data: [100, 100, 67, 100, 100, 100], // Benchmark normalizzato
             backgroundColor: "rgba(145, 190, 145, 0.4)", borderColor: "rgba(103, 167, 103, 1)", borderWidth: 2
        }]
    };
}
function getSensitivityData() {
    // console.log("Fornitura dati per sensitivityChart (Report Parte 6)");
     return {
         labels: ["Ricavi", "Costi Fissi", "Crediti Clienti (gg)", "Debiti Fornitori (gg)"],
         datasets: [{
             label: "Variazione Critica",
             data: [-20.69, 42.53, 22, -33], // Dati dai report - Basati sull'analisi di sensitività
             backgroundColor: ["#F44336", "#4CAF50", "#F44336", "#F44336"] // Colori per impatto
         }]
     };
}


// ======================================
// OPZIONI COMUNI PER I GRAFICI
// ======================================
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { boxWidth: 12, padding: 15, font: { size: 11 } }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { weight: 'bold', size: 13 },
            bodyFont: { size: 12 },
            padding: 10,
            cornerRadius: 4,
            displayColors: true,
            boxPadding: 4,
            callbacks: { // Callback di default migliorato
                 label: function(context) {
                     let label = context.dataset.label || context.label || '';
                     if (label) label += ': ';
                     let value = context.parsed.y;
                      if (value === null || value === undefined) value = context.parsed.r; // Per radar

                     if (value !== null && value !== undefined) {
                         const axisID = context.dataset.yAxisID;
                         const labelText = context.label;
                         const datasetLabel = context.dataset.label || '';

                          if (datasetLabel.includes('%') || (axisID === 'y1' && context.chart.options.scales?.y1?.title?.text.includes('%'))) {
                             label += formatPercentage(value);
                          } else if (datasetLabel.includes('(gg)') || labelText?.includes('(gg)')) {
                             label += value.toFixed(0) + ' gg';
                          } else if (datasetLabel.includes('(x)') || labelText?.includes('(x)') || datasetLabel.includes('PFN/EBITDA') || datasetLabel.includes('D/E') || datasetLabel.includes('Z-Score')) {
                             label += value.toFixed(2) + (datasetLabel.includes('Z-Score') ? '' : 'x');
                          } else if (datasetLabel.includes('Score') && !datasetLabel.includes('Z-Score')) {
                              label += value.toFixed(2);
                          } else if (datasetLabel.includes('Variazione Critica')) { // Per grafico sensitività
                               label += value.toFixed(2) + (labelText.includes('(gg)') ? ' gg' : '%');
                          }
                          else if (Math.abs(value) >= 1000000) {
                             label += formatCurrency(value / 1000000, 2) + ' M';
                         } else if (Math.abs(value) >= 1000) {
                             label += formatCurrency(value / 1000, 0) + ' K';
                         } else {
                              label += formatCurrency(value, (Math.abs(value) < 10 && value !== 0 ? 2 : 0));
                         }
                     } else {
                         label += 'N/D';
                     }
                     return label;
                 }
             }
        }
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: { font: { size: 11 } }
        },
        y: {
            grid: { color: '#e0e0e0', borderDash: [2, 3] },
            ticks: { font: { size: 11 } }
        }
    },
    animation: { duration: 400 }
};

// Opzioni specifiche per grafici a torta/ciambella
const pieChartOptions = {
    ...commonChartOptions,
    cutout: '0%',
     plugins: {
         ...commonChartOptions.plugins,
        tooltip: {
             ...commonChartOptions.plugins.tooltip,
            callbacks: { // Callback specifico per Torta/Ciambella
                label: function(context) {
                    const label = context.label || '';
                    const value = context.raw || 0; // Usa valore raw (percentuale)
                    const originalValue = context.dataset._originalData ? context.dataset._originalData[context.dataIndex] : value;
                    const percentage = formatPercentage(value); // Formatta la percentuale
                    return `${label}: ${formatCurrency(originalValue)} (${percentage})`;
                }
            }
        }
     }
};
const doughnutChartOptions = { ...pieChartOptions, cutout: '50%' };

// Opzioni specifiche per grafici radar
const radarChartOptions = {
     ...commonChartOptions,
      scales: {
         r: {
             angleLines: { color: '#e0e0e0' },
             grid: { color: '#e0e0e0' },
             pointLabels: { font: { size: 10 } },
             ticks: {
                 backdropColor: 'rgba(255, 255, 255, 0.75)',
                 font: { size: 9 },
                 maxTicksLimit: 5,
                 // callback: function(value) { return value + '%'; } // Esempio se scala è %
             },
             suggestedMin: 0,
             // suggestedMax: 150 // Adattare se necessario per i dati normalizzati
         }
      },
      plugins: {
          ...commonChartOptions.plugins,
          tooltip: {
              ...commonChartOptions.plugins.tooltip,
               callbacks: {
                   label: function(context) {
                       let label = context.dataset.label || '';
                       if (label) label += ': ';
                       if (context.parsed.r !== null) {
                          label += context.parsed.r.toFixed(1); // Valore asse radiale
                       }
                       return label;
                   }
               }
          }
      }
};

console.log("charts_config.js caricato e pronto per ABBREVIA S.p.A.");