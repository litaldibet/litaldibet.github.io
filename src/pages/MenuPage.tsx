import "../../assets/css/MenuPage.css"

type MenuPageProps = {
  title?: string
}

export default function MenuPage({ title = "Menu" }: MenuPageProps) {
  return (
    <section className="menu-page">
      <h1 className="menu-page-title">
        {title}
      </h1>
      <p className="menu-page-text">
        Esta seção está em construção.<br></br>
        Maiores informações e novas atualizações serão divulgadas <a href="https://www.linkedin.com/in/gabriel-litaldi/" target="_blank" rel="noopener noreferrer" style={{ color: "lightblue", textDecoration: "underline" }}>aqui</a>.</p>
    </section>
  )
}
