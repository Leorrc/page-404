
export function App() {
  return (
    <div className="grid grid-cols-2 content-center h-screen py-0 px-40">
      <main className="fr-1 max-w-[23.75rem] text-[#D6D6F2] ">

        <h1 className="text-[2.5rem]/[120%]">Ops, página não foi encontrada</h1>

        <p className="font-light text-[1.25rem]/[140%] mt-6">Parece que você se perdeu...
          Tente voltar para a página
          anterior ou acessar a home.
        </p>

        <div className="mt-14 flex gap-4 items-center">
          <a className="flex items-center justify-center py-3 px-6 bg-[#151557] rounded-[62.4375rem] text-[#E2E2F5] font-medium leading-[140%] uppercase hover:bg-[#212187] " href="#">
            Voltar
          </a>
          <a className="flex items-center justify-center py-3 px-6 bg-[#151557] rounded-[62.4375rem] text-[#E2E2F5] font-medium leading-[140%] uppercase hover:bg-[#212187] " href="#">
            IR para Home
          </a>
        </div>
      </main>
      <aside className="fr-1 flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="107" viewBox="0 0 81 107" fill="none">
          <path d="M0.84375 84.9688L13.832 6.74219H33.7969L20.6602 84.9688H0.84375ZM0.84375 84.9688L12.4961 67.082H52.7969V84.9688H0.84375ZM69.3477 84.9688V67.082H81V84.9688H69.3477ZM51.3125 106.195V0.804688H70.832V106.195H51.3125Z" fill="#BF7BFB" />
        </svg>

        <iframe className="w-80 h-80" src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json"></iframe>


        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="107" viewBox="0 0 81 107" fill="none">
          <path d="M0 84.9688L12.9883 6.74219H32.9531L19.8164 84.9688H0ZM0 84.9688L11.6523 67.082H51.9531V84.9688H0ZM68.5039 84.9688V67.082H80.1562V84.9688H68.5039ZM50.4688 106.195V0.804688H69.9883V106.195H50.4688Z" fill="#BF7BFB" />
        </svg>
      </aside>
    </div>
  )
}