/**
 * SCAN - Configurazione Grafici Report Dettagliati (report/parteX_*.html)
 */

// Funzioni di utilità per formattazione
function formatCurrency(value) {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

// Opzioni comuni per tutti i grafici
const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: { grid: { display: true } },
        y: { beginAtZero: true, grid: { display: true } }
    },
    plugins: {
        legend: { position: 'top' },
        tooltip: { mode: 'index', intersect: false }
    }
};

// Opzioni specifiche per grafici a torta
const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'right' },
        tooltip: { callbacks: { label: function(context) { return context.label + ': ' + context.parsed + '%'; } } }
    }
};

// Opzioni specifiche per grafici a ciambella
const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'right' },
        tooltip: { callbacks: { label: function(context) { return context.label + ': ' + context.parsed + '%'; } } }
    },
    cutout: '50%'
};

// Opzioni specifiche per grafici radar
const radarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: { beginAtZero: true, min: 0, max: 100, ticks: { stepSize: 20 } }
    },
    plugins: {
        legend: { position: 'top' },
        tooltip: { callbacks: { label: function(context) { return context.label + ': ' + context.raw + '%'; } } }
    }
};

// Funzione per inizializzare un grafico
function initChart(canvasId, type, data, options) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: data,
        options: options
    });
}

// --- PARTE 1: Sintesi ---
function getMainMetricsData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Ricavi',
                data: [7827, 9076, 9753],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'EBITDA',
                data: [1495, 1626, 2009],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Patrimonio Netto',
                data: [2050, 1998, 6600],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCurrentAssetsLiabilitiesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Attivo Corrente',
                data: [3267072, 3480887, 3762961],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Passivo Corrente',
                data: [1625526, 2260071, 4701161],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 2: Economico ---
function getEconomicTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                type: 'bar',
                label: 'Ricavi',
                data: [7827, 9076, 9753],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'EBITDA',
                data: [1495, 1626, 2009],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'EBITDA %',
                data: [19.1, 17.9, 20.6],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                yAxisID: 'y1'
            }
        ]
    };
}

function getMarginalityData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'EBITDA Margin',
                data: [19.1, 17.9, 20.6],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'ROS (EBIT/Ricavi)',
                data: [16.6, 14.2, 8.3],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'Utile Netto/Ricavi',
                data: [11.6, 10.3, 5.8],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }
        ]
    };
}

function getProfitabilityIndicesData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [95.87, 85.93, 9.41],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'ROE',
                data: [44.47, 46.94, 8.56],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'ROS',
                data: [16.6, 14.2, 8.3],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }
        ]
    };
}

function getLeverageData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'ROI',
                data: [95.87, 85.93, 9.41],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'ROE',
                data: [44.47, 46.94, 8.56],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Costo medio del debito',
                data: [20.46, 2.80, 9.68],
                backgroundColor: 'rgba(255, 205, 86, 0.5)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 3: Patrimoniale ---
function getAssetsData() {
    return {
        labels: ['Immobilizzazioni materiali', 'Immobilizzazioni immateriali', 'Immobilizzazioni finanziarie', 'Liquidità', 'Crediti commerciali', 'Altri crediti'],
        datasets: [{
            data: [0.5, 65.8, 1.1, 5.0, 25.7, 1.9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getLiabilitiesData() {
    return {
        labels: ['Patrimonio Netto', 'Passività consolidate', 'Debiti finanziari a breve', 'Debiti commerciali', 'Debiti tributari e altri'],
        datasets: [{
            data: [57.2, 2.1, 22.3, 7.2, 11.2],
            backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getInvestmentsStructureData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Immobilizzazioni materiali',
                data: [128748, 93104, 62651],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Immobilizzazioni immateriali',
                data: [647209, 920220, 7594208],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Immobilizzazioni finanziarie',
                data: [36455, 36455, 126455],
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getEquityCompositionData() {
    return {
        labels: ['Capitale sociale', 'Riserve', 'Utile d\'esercizio'],
        datasets: [{
            data: [3.0, 88.4, 8.6],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getFinancialDebtData() {
    return {
        labels: ['Debiti finanziari a breve', 'Debiti finanziari a M/L termine'],
        datasets: [{
            data: [100, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    };
}

function getPfnTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Debiti finanziari',
                data: [365606, 152286, 2578009],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Liquidità',
                data: [-948097, -651088, -572381],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'PFN',
                data: [-582491, -498802, 2005628],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 5
            }
        ]
    };
}

// --- PARTE 4: Bancabilità ---
function getDebtSustainabilityData() {
    return {
        labels: ['PFN/EBITDA', 'Leva Finanziaria (D/E)', 'EBITDA/Oneri Finanziari', 'DSCR', 'Cash Flow/Debiti Fin.'],
        datasets: [
            {
                label: 'ABBREVIA SPA',
                data: [90, 85, 80, 95, 85],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 3
            },
            {
                label: 'Benchmark Settore',
                data: [70, 65, 60, 75, 65],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 3
            }
        ]
    };
}

function getDebtCostData() {
    return {
        labels: ['2022', '2023', '2024', '2025E', '2026E'],
        datasets: [
            {
                type: 'bar',
                label: 'EBITDA',
                data: [1495, 1626, 2009, 2200, 2350],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Capacità Teorica Indebitamento',
                data: [4485, 4878, 6027, 6600, 7050],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                yAxisID: 'y1'
            }
        ]
    };
}

// --- PARTE 5: Circolante e Flussi ---
function getWorkingCapitalCycleData() {
    return {
        labels: ['DSO (Giorni Crediti)', 'DPO (Giorni Debiti)', 'Ciclo del Circolante'],
        datasets: [
            {
                label: 'ABBREVIA SPA',
                data: [110, 49, 61],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Benchmark Settore',
                data: [90, 60, 30],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getCashFlowWaterfallData() {
    return {
        labels: ['EBITDA', 'Δ Capitale Circolante', 'Cash Flow Operativo', 'Investimenti', 'Var. Debiti Fin.', 'Var. Patrimonio Netto', 'Variazione Netta Cassa'],
        datasets: [
            {
                data: [2009458, -631094, 1378364, -7920241, 2425723, 4037447, -78707],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }
        ]
    };
}

function getCashFlowTrendData() {
    return {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Cash Flow Operativo',
                data: [740070, 1354919, 1378364],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'Cash Flow Investimenti',
                data: [-196353, -561999, -7920241],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'Cash Flow Finanziamento',
                data: [404384, -1089929, 6463170],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }
        ]
    };
}

function getCashFlowProjectionData() {
    return {
        labels: ['2025E', '2026E', '2027E', '2028E'],
        datasets: [
            {
                type: 'bar',
                label: 'Cash Flow Operativo',
                data: [1700000, 2150000, 2400000, 2600000],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Investimenti',
                data: [-1500000, -1200000, -1000000, -900000],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Servizio del Debito',
                data: [-350000, -400000, -450000, -500000],
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Liquidità Finale',
                data: [422381, 972381, 1922381, 3122381],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                yAxisID: 'y1'
            }
        ]
    };
}

// --- PARTE 6: Rischi ---
function getZscoreData() {
    return {
        labels: ['2022', '2023', '2024', '2025E'],
        datasets: [
            {
                label: 'Z-Score ABBREVIA SPA',
                data: [3.8, 3.5, 3.26, 3.4],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            },
            {
                label: 'Soglia di Sicurezza',
                data: [2.99, 2.99, 2.99, 2.99],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false,
                borderDash: [5, 5]
            },
            {
                label: 'Zona di Incertezza',
                data: [1.81, 1.81, 1.81, 1.81],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                fill: false,
                borderDash: [5, 5]
            }
        ]
    };
}

function getRiskIndicatorsData() {
    return {
        labels: ['Redditività', 'Liquidità', 'Solidità', 'Efficienza', 'Crescita', 'Bancabilità'],
        datasets: [
            {
                label: 'ABBREVIA SPA',
                data: [85, 75, 80, 70, 85, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 3
            },
            {
                label: 'Benchmark Settore',
                data: [70, 65, 60, 65, 60, 70],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 3
            }
        ]
    };
}

function getSensitivityData() {
    return {
        labels: ['Variazione Ricavi', 'Variazione Costi Fissi', 'Variazione Crediti', 'Variazione Debiti'],
        datasets: [
            {
                label: 'Variazione Critica',
                data: [-20.69, 42.53, 20, -33],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };
}

// --- PARTE 7: Ottimizzazione Contabile ---
function getOptimizationImpactData() {
    return {
        labels: ['Revisione Ammortamenti', 'Capitalizzazione Costi R&D', 'Ottimizzazione Accantonamenti', 'Riclassificazione Poste', 'Totale'],
        datasets: [
            {
                label: 'Impatto Economico',
                data: [150000, 200000, 30000, 0, 380000],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Impatto Patrimoniale',
                data: [150000, 200000, 30000, 100000, 480000],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getIndicatorsImprovementData() {
    return {
        labels: ['EBITDA', 'EBIT', 'Utile Netto', 'PFN/EBITDA', 'Copertura Immob.', 'Ciclo Circolante', 'Leanus Score'],
        datasets: [
            {
                label: 'Miglioramento %',
                data: [2.5, 23.5, 23.0, -8.5, 8.8, -16.4, 14.3],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getImplementationTimelineData() {
    return {
        labels: ['Settimana 1', 'Settimana 2', 'Settimana 3', 'Settimana 4', 'Settimana 5', 'Settimana 6'],
        datasets: [
            {
                label: 'Revisione Ammortamenti',
                data: [1, 1, 1, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Capitalizzazione Costi R&D',
                data: [0, 1, 1, 1, 0, 0],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Ottimizzazione Accantonamenti',
                data: [0, 0, 1, 1, 0, 0],
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            },
            {
                label: 'Riclassificazione Poste',
                data: [0, 0, 0, 1, 1, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Disclosure in Nota Integrativa',
                data: [0, 0, 0, 0, 1, 1],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    };
}

function getRoiOptimizationData() {
    return {
        labels: ['Revisione Ammortamenti', 'Capitalizzazione Costi R&D', 'Ottimizzazione Accantonamenti', 'Riclassificazione Poste'],
        datasets: [
            {
                type: 'bar',
                label: 'Costi Implementazione',
                data: [15000, 25000, 10000, 5000],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Benefici Attesi',
                data: [150000, 200000, 30000, 100000],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'ROI %',
                data: [900, 700, 200, 1900],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                yAxisID: 'y1'
            }
        ]
    };
}