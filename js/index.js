import { getSalesCoffee } from './requirements.js';

const processSalesCoffee = async () => {
    const xml = await getSalesCoffee();
    const tableBody = document.getElementById('table-body');
    
    tableBody.innerHTML = ''; 

    if (!xml) return;

    const items = xml.querySelectorAll('row'); 

    for (const item of items) {
        const getVal = (tag) => {
            const node = item.querySelector(tag);
            return node ? node.textContent : '';
        };

        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${getVal('hour_of_day')}</td>
            <td>${getVal('cash_type')}</td>
            <td>${getVal('money')}</td>
            <td>${getVal('coffee_name')}</td>
            <td>${getVal('Time_of_Day')}</td>
            <td>${getVal('Weekday')}</td>
            <td>${getVal('Month_name')}</td>
            <td>${getVal('Weekdaysort')}</td>
            <td>${getVal('Monthsort')}</td>
            <td>${getVal('Date')}</td>
            <td>${getVal('Time')}</td>
        `;
        tableBody.appendChild(tr);
    }

    // Inicializamos el datatable al terminar de crear las filas
    $('#example').DataTable({
        responsive: true,
        destroy: true
    });
};

document.addEventListener('DOMContentLoaded', processSalesCoffee);