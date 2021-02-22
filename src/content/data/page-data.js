import React from "react"
export const pageData = {
  companyName: "Nutrition Health Institute",
  navbar: {
    links: [
      { name: "o nas", href: "#about" },
      { name: "produkty", href: "#products" },
      { name: "współpraca", href: "#cooperation" },
      { name: "kontakt", href: "#footer" },
      {
        name: (
          <>
            <strong>PL</strong>/EN
          </>
        ),
        href: "/en",
      },
    ],
  },
  title: {
    desktop: {
      heading: (
        <>
          zdrowie <br />i płodność
        </>
      ),
      paragraph: (
        <>
          Best people, best products,
          <br />
          best opportunities
        </>
      ),
    },
    mobile: {
      heading: (
        <>
          zdrowie <br />i płodność
        </>
      ),
      paragraph: (
        <>
          Best people,
          <br />
          best products,
          <br />
          best opportunities
        </>
      ),
    },
  },
  sections: {
    about: {
      id: "about",
      title: "o nas",
      texts: [
        {
          text:
            "Nutrition Health Institute – to firma, która koncentruje się na opracowywaniu i wytwarzaniu najnowszej generacji wieloskładnikowych preparatów farmaceutycznych zarówno dla kobiet jak i dla mężczyzn, którzy pragną spełnić największe swoje marzenie – zostać szczęśliwymi rodzicami. Zdiagnozowana niepłodność bardzo często staje się treścią życia, z którą trudno się pogodzić i uporać. NHI wytwarza i sprzedaje innowacyjne i najlepsze w swojej klasie produkty w obszarze zdrowia kobiet i mężczyzn, których zadaniem jest uszczęśliwienie takich par. Nasz zespól to najlepsze specjaliści - Dr n. med. Tomasz Rokicki, Jan Karol Wolski i Adriana Grodzicka.",
        },
      ],
    },
    products: {
      id: "products",
      title: "produkty",
      texts: [
        {
          text:
            "Nasze preparaty zostały opracowane na podstawie wieloletnich badań prowadzonych przez wybitnych polskich specjalistów pracujących w najlepszych klinikach zajmujących się leczeniem niepłodności przy współpracy ze środowiskiem akademickim, pracownikami służby zdrowia oraz pacjentami. Nasze suplementy spełniają najwyższe standardy jakościowe, są bezpieczne, a ich głównym zadaniem jest pomaganie pacjentom starającym się o potomstwo w spełnieniu ich pragnienia.",
        },
      ],
      soonPL: (
        <p>
          Wkrótce będę dostępne na rynku Polskim <strong>TENfertil ONA</strong>{" "}
          i <strong>TENhair</strong>
        </p>
      ),
      items: [
        {
          id: 1,
          name: "TENfertil ON",
          heading: (
            <>
              TENfertil<sup>&reg;</sup>ON
            </>
          ),
          image: "../../images/png/tenfertil.png",
          buttonMorePL: {
            href: "https://tenfertil.pl",
            label: "więcej o tenfertil on",
          },
          buttonBuyPL: {
            href: "https://tenfertil.pl/kup",
            label: "gdzie kupić",
          },
          texts: [
            {
              text:
                "Skład TENfertil ON oraz dawki przyjmowania zostały opracowane na podstawie wieloletnich doświadczeń specjalistów, pracujących w wiodących polskich klinikach i zajmujących się leczeniem niepłodności, w oparciu o najnowszą wiedzę medyczną i wytyczne towarzystw naukowych zajmujących się rozrodem człowieka.",
            },
            {
              text:
                "Preparat TENfertil ON może być stosowany przez mężczyzn starających się o dzieci. Szczególnie zalecany jest dla panów, u których stwierdzono obniżenie parametrów nasienia.",
            },
            {
              text:
                "Czas stosowania preparatu nie powinien być krótszy niż 3 miesiące. Zaleca się przyjmowanie TENfertil ON przez cały okres starania się o potomstwo i leczenia niepłodności.",
            },
          ],
        },
      ],
    },
    cooperation: {
      id: "cooperation",
      title: "współpraca",
      texts: [
        {
          text:
            "Przedstawiciele zawodów medycznych, jako najważniejsze osoby mające kontakt z pacjentami, posiadają nieocenioną wiedzę specjalistyczną na temat wyników leczenia pacjentów i sposobów walki z chorobami. Odgrywa to kluczową rolę w podniesienie poziomu opieki nad pacjentami, rozwoju terapii oraz poprawę wyników leczenia.",
        },
        {
          text:
            "Współpraca w chwili obecnej opiera się na Badaniach klinicznych. Lekarze prowadzący leczenie i inni przedstawiciele zawodów medycznych realizują badania kliniczne w ośrodkach badawczych zgodnie z protokołami badań klinicznych zatwierdzonymi przez organy ochrony zdrowia i niezależne komisje bioetyczne.",
        },
      ],
    },
  },
  form: {
    formURL: "",
    title: "Wypełnij formularz, żeby wziąć udział",
    placeholders: {
      fullName: "Imię i nazwisko",
      email: "E-mail",
      phoneNumber: "Numer telefonu",
    },
    buttonSendPL: "wyślij",
    agreement:
      "Wyrażam zgodę na wykorzystanie i przetwarzanie moich danych osobowych w celu realizacji zamówienia oraz kontaktu ze mną, wraz z przepisami rozporządzenia RODO o ochronie danych osobowych. Oświadczam, że zostałam(em) poinformowana(y) o przysługującym mi prawie dostępu do treści moich danych osobowych ich poprawiania oraz żądania usunięcia, jak również prawa do wycofania zgody w każdym czasie.",
  },
  footer: {
    id: "footer",
    logo: "url",
    number: "+48 666 368 005",
    email: "info@nhinstitute.pl",
    company:
      "Sp. z o.o. Białozora 9, 02-817 Warszawa, Polska\nKRS: 0000861627\nREGON: 38710727\nNIP: 9512507706",
    copyrights: "Nutrition Health Institute",
  },
}
