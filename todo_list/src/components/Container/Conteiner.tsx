export function Container({children, titulo}: any) {
    return (
        <section className="container-border">
            <h2 >{titulo}</h2>
            <hr />
            <div>
                {children}
            </div>
        </section>
    )
}