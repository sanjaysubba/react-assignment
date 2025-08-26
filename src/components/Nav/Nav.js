export default function Nav() {
  return (
    <nav className="mb-8">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold">React Assignment</h1>

          <ul className="flex gap-8 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
