'use client'

export default function Tables() {
  return (
    <>
      <h1 className="page-title" data-testid="page-tables">Tables &amp; Lists</h1>
      <p className="page-desc">Structured data tables and every list type.</p>

      <section className="section">
        <h2>Data Table</h2>
        <table className="data-table" data-testid="data-table" id="data-table">
          <caption>User test data</caption>
          <thead>
            <tr>
              <th scope="col" data-testid="th-id">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr data-testid="row-1">
              <td>1</td>
              <td data-testid="cell-alice">Alice</td>
              <td>Admin</td>
              <td><span className="badge">Active</span></td>
            </tr>
            <tr data-testid="row-2">
              <td>2</td>
              <td>Bob</td>
              <td>Editor</td>
              <td><span className="badge">Active</span></td>
            </tr>
            <tr data-testid="row-3">
              <td colSpan={2}>Merged cell row</td>
              <td>Viewer</td>
              <td><span className="badge">Inactive</span></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: 'var(--text-muted)' }}>3 rows total</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section className="section">
        <h2>Unordered List</h2>
        <ul data-testid="ul-list">
          <li data-testid="ul-item-1">First item</li>
          <li>Second item
            <ul>
              <li data-testid="ul-nested">Nested item</li>
            </ul>
          </li>
          <li>Third item</li>
        </ul>
      </section>

      <section className="section">
        <h2>Ordered List</h2>
        <ol data-testid="ol-list" type="A" start={3}>
          <li data-testid="ol-item-1">Step one</li>
          <li>Step two</li>
          <li>Step three</li>
        </ol>
      </section>

      <section className="section">
        <h2>Description List</h2>
        <dl data-testid="dl-list">
          <dt data-testid="dt-html">HTML</dt>
          <dd>HyperText Markup Language</dd>
          <dt>CSS</dt>
          <dd data-testid="dd-css">Cascading Style Sheets</dd>
          <dt>ARIA</dt>
          <dd>Accessible Rich Internet Applications</dd>
        </dl>
      </section>

      <section className="section">
        <h2>Menu List (navigation pattern)</h2>
        <nav aria-label="Sample menu">
          <ul role="menubar" data-testid="menubar">
            <li role="none"><a href="#" role="menuitem" data-testid="menu-file">File</a></li>
            <li role="none"><a href="#" role="menuitem" data-testid="menu-edit">Edit</a></li>
            <li role="none"><a href="#" role="menuitem" data-testid="menu-view">View</a></li>
          </ul>
        </nav>
      </section>
    </>
  )
}
