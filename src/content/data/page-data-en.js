import React from "react"
export const pageDataEn = {
  companyName: "Nutrition Health Institute",
  navbar: {
    icon: "",
    links: [
      { name: "about us", href: "#about" },
      { name: "products", href: "#products" },
      { name: "cooperation", href: "#cooperation" },
      { name: "contact", href: "#footer" },
      {
        name: (
          <>
            PL/<strong>EN</strong>
          </>
        ),
        href: "/",
      },
    ],
  },
  title: {
    desktop: {
      heading: (
        <>
          health <br />
          and fertility
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
          health <br />
          and fertility
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
      title: "about us",
      texts: [
        {
          text:
            "Nutrition Health Institute – company that concentrates on developing and manufacturing the newest generation multi-component pharmaceutical products, both for men and women that would like to fulfill their biggest dream – become happy parents. Diagnosed infertility very often becomes the main focus of life that is hard to accept and deal with. NHI manufactures and sells innovative and the best in its class products in an area of men and women’s health, with the task of making such couples happy. Our team are the best specialists - Dr n. med. Tomasz Rokicki, Dr Jan Karol Wolski i Adriana Grodzicka.",
        },
      ],
    },
    products: {
      id: "products",
      title: "products",
      texts: [
        {
          text:
            "Our products has been developed after many years of research conducted by eminent polish specialists working in the best clinics dealing with infertility treatment in cooperation with academic community, health service workers as well as patients. Our supplements meet the highest quality standards, they are safe and their main function is helping patients seeking pregnancy in making their dreams come true.",
        },
      ],
      soonEN: (
        <p>
          Soon <strong>TENfertil ONA</strong> and <strong>TENhair</strong> will
          be available on Polish market.
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
            label: "about tenfertil on",
          },
          buttonBuyPL: {
            href: "https://tenfertil.pl/kup",
            label: "where to buy",
          },
          texts: [
            {
              text:
                "Contents and dosage of TENfertil ON has been developed on the basis of many years of experience of Polish specialists working in leading Polish clinics and treating infertility based on the newest developments in this field as well as guidelines from scientific society dealing with reproduction.",
            },
            {
              text:
                "TENfertil ON can be used by men trying to have kids. It is especially recommended for men with lower semen parameters.",
            },
            {
              text:
                "Time of using product shouldn’t be shorter than 3 months. It is recommended to take TENfertil ON throughout the whole period of trying to get pregnant and treating infertility.",
            },
          ],
        },
      ],
    },
    cooperation: {
      id: "cooperation",
      title: "cooperation",
      texts: [
        {
          text:
            "Representatives of medical professions are the people who have the most contact with patients and they are the ones who have invaluable specialist knowledge on the results of treating patients and ways of fighting diseases. This plays the key part in raising the level of care among patients, development of therapy and improving results of treatment.",
        },
        {
          text:
            "Cooperation at this moment is based mainly on clinical trials - medical doctors leading the treatment and other representatives of medical professions are conducting clinical trials in research facilities according to clinical trials methodology approved by health service institutions and independent bioethical commissions.",
        },
      ],
    },
  },
  form: {
    formURL: "",
    title: "Complete the form to take part",
    placeholders: {
      fullName: "Name and surname",
      email: "E-mail",
      phoneNumber: "Phone number",
    },
    buttonSendPL: "send",
    agreement:
      "I consent to the use and processing of my personal data for the purpose of completing the order and contact with me in accordance with the provisions of the GDPR regulation on the protection of personal data. I declare that I have been informed about my right to access my personal data, correct it and request removal, as well as the right to withdraw my consent at any time.",
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
