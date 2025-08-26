import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="mb-8">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold">React Assignment</h1>

          <ul className="flex gap-8 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
