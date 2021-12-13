class Table {
  headers = ["id", "adress", "status", "type", "description"];
  data = [{}];

  sortBy = "";

  _table = document.createElement("table");

  _header = document.createElement("thead");
  _body = document.createElement("tbody");

  constructor(data) {
    this.data = data;

    this.sortBy = this.headers[0];

    this._table.append(this._header, this._body);
  }

  render(el) {
    this.renderHeader();
    this.renderBody();

    el.append(this._table);
  }

  renderHeader() {
    const row = document.createElement("tr");

    const cells = this.headers.map((data) => {
      const cell = document.createElement("th");

      const onChangeSort = changeSort.bind(this);

      cell.append(data);
      cell.addEventListener("click", () => onChangeSort(data));

      return cell;
    });

    row.append(...cells);

    if (this._header.children.length > 0) this._header.replaceChildren(...row);
    else this._header.append(row);

    function changeSort(headerToSort) {
      this.sortBy = headerToSort;
      this.renderBody();
    }
  }

  renderBody() {
    const rows = [];

    const sortedData = this.data.sort((a, b) => {
      return a[this.sortBy] > b[this.sortBy] ? 1 : -1;
    });

    for (const rowOfData of sortedData) {
      const row = document.createElement("tr");

      const rowData = [];

      for (const header of this.headers) rowData.push(rowOfData[header]);

      const cells = rowData.map((data) => {
        const cell = document.createElement("td");
        cell.append(data);

        return cell;
      });

      row.append(...cells);

      rows.push(row);
    }

    if (this._body.children.length > 0) this._body.replaceChildren(...rows);
    else this._body.append(...rows);
  }
}

module.exports = Table;
