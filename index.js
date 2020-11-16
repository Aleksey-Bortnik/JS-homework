import fullData from "./data.js";

const $table = document.querySelector(".table");
const $select = document.querySelector(".types-select");

function addUnit(unit) {
  let dataRow = `<tr>
    <td>${unit.price}</td>
    <td>${unit.type}</td>
    <td>${unit.area}</td>
    <td>${unit.presence}</td>
    <td>${unit.name}</td>
    <td>${unit.id}</td>
    </tr>`;
  $table.innerHTML += dataRow;
}

function addOptions() {
  const uniqueTypes = [];

  for (let unit of fullData) {
    if (!uniqueTypes.find((type) => type === unit.type)) {
      uniqueTypes.push(unit.type);
    }
  }

  for (let type of uniqueTypes.sort()) {
    $select.innerHTML += `<option value='${type}'>${type}</option>`;
  }
}

function renderTable(data) {
  $table.innerHTML = "";
  for (let unit of data) {
    addUnit(unit);
  }
}

function setupFilter() {
  let $filterButton = document.querySelector(".filter-btn");

  $filterButton.addEventListener("click", function () {
    let selectedType = +$select.value;
    let filteredData = fullData.filter(function (unit) {
      if (unit.type === selectedType) {
        return true;
      } else {
        return false;
      }
    });

    renderTable(filteredData);
  });
}

addOptions();
renderTable(fullData);
setupFilter();
