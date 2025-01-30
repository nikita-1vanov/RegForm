export class Template {
  userTablesLine(userData) {
    return `
    <div class="table__line">
      <p>${userData.name}</p>
      <p>${userData.surname}</p>
      <p>${userData.age}</p>
      <p>${userData.email}</p>
    </div>
    `;
  }
}
