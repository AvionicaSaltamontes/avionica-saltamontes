"use client";
import { useLayoutEffect, useState } from "react";

import Container from "@/components/container/Main";

const Info = () => {
  const [lang, setLang] = useState("en");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";

  useLayoutEffect(() => {
    const storedLocale = localStorage.getItem("lang-avionica") || "en";
    setLang(storedLocale);
  }, []);

  return (
    <section className="py-10">
      {lang === "es" && (
        <Container>
          <p className="text-2xl font-calibri-bold mt-14">Terminos y Condiciones</p>

          <p className="font-calibri-bold text-2xl mt-5">Identificación y Titularidad</p>
          <p className="font-calibri-regular">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico,
            el Titular expone sus datos identificativos:
          </p>

          <p className="mt-5 font-calibri-regular">Titular: AVIONICA SALTAMONTES SRL DE CV</p>
          <p className="font-calibri-regular">RFC: ASA2210202XA</p>
          <p className="font-calibri-regular">C. Revolución de 1910 N 590, Centro, La Paz, Baja California Sur, 23000</p>
          <p className="font-calibri-regular">Correo electrónico: {contactEmail}</p>
          <p className="font-calibri-regular">Sitio Web: {siteUrl}</p>

          <p className="mt-5 font-calibri-bold text-2xl">Finalidad</p>
          <p className="font-calibri-regular">La finalidad del Sitio Web es: Renta de aeronaves ejecutivas.</p>

          <p className="mt-5 font-calibri-bold text-2xl">Condiciones de uso</p>
          <p className="font-calibri-regular">
            La utilización del Sitio Web le otorga la condición de Usuario, e implica la aceptación completa de todas las cláusulas y condiciones de
            uso incluidas en las páginas:
          </p>

          <p className="mt-5 font-calibri-regular">Aviso Legal</p>
          <p className="font-calibri-regular">Política de Privacidad</p>
          <p className="font-calibri-regular">Política de Cookies</p>
          <p className="font-calibri-regular">
            Si no estuviera conforme con todas y cada una de estas cláusulas y condiciones absténgase de utilizar el Sitio Web.
          </p>

          <p className="mt-5 font-calibri-regular">
            El acceso al Sitio Web no supone, en modo alguno, el inicio de una relación comercial con el Titular.
          </p>

          <p className="mt-5 font-calibri-regular">
            A través del Sitio Web, el Titular le facilita el acceso y la utilización de diversos contenidos que el Titular y/o sus colaboradores han
            publicado por medio de Internet.
          </p>

          <p className="mt-5 font-calibri-regular">
            A tal efecto, está obligado y comprometido a NO utilizar cualquiera de los contenidos del Sitio Web con fines o efectos ilícitos,
            prohibidos en este Aviso Legal o por la legislación vigente, lesivos de los derechos e intereses de terceros, o que de cualquier forma
            puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, los equipos informáticos o los
            documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático propios o contratados por el Titular, de otros
            usuarios o de cualquier usuario de Internet.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Medidas de Seguridad</p>
          <p className="font-calibri-regular">
            Los datos personales que facilite al Titular pueden ser almacenados en bases de datos automatizadas o no, cuya titularidad corresponde en
            exclusiva al Titular, que asume todas las medidas de índole técnica, organizativa y de seguridad que garantizan la confidencialidad,
            integridad y calidad de la información contenida en las mismas de acuerdo con lo establecido en la normativa vigente en protección de
            datos.
          </p>

          <p className="mt-5 font-calibri-regular">
            No obstante, debe ser consciente de que las medidas de seguridad de los sistemas informáticos en Internet no son enteramente fiables y
            que, por tanto el Titular no puede garantizar la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas
            informáticos (software y hardware) del Usuario o en sus documentos electrónicos y ficheros contenidos en los mismos aunque el Titular pone
            todos los medios necesarios y toma las medidas de seguridad oportunas para evitar la presencia de estos elementos dañinos.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Tratamientos de datos personales</p>
          <p className="font-calibri-regular">
            Puede consultar toda la información relativa al tratamiento de datos personales que recoge el Titular en la página de Política de
            Privacidad.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Contenidos</p>
          <p className="font-calibri-regular">
            El Titular ha obtenido la información, el contenido multimedia y los materiales incluidos en el Sitio Web de fuentes que considera
            fiables, pero, si bien ha tomado todas las medidas razonables para asegurar que la información contenida es correcta, el Titular no
            garantiza que sea exacta, completa o actualizada. El Titular declina expresamente cualquier responsabilidad por error u omisión en la
            información contenida en las páginas del Sitio Web.
          </p>

          <p className="mt-5 font-calibri-regular">
            Queda prohibido transmitir o enviar a través del Sitio Web cualquier contenido ilegal o ilícito, virus informáticos, o mensajes que, en
            general, afecten o violen derechos del Titular o de terceros.
          </p>

          <p className="mt-5 font-calibri-regular">
            Los contenidos del Sitio Web tienen únicamente una finalidad informativa y bajo ninguna circunstancia deben usarse ni considerarse como
            oferta de venta, solicitud de una oferta de compra ni recomendación para realizar cualquier otra operación, salvo que así se indique
            expresamente.
          </p>

          <p className="mt-5 font-calibri-regular">
            El Titular se reserva el derecho a modificar, suspender, cancelar o restringir el contenido del Sitio Web, los vínculos o la información
            obtenida a través del Sitio Web, sin necesidad de previo aviso.
          </p>

          <p className="mt-5 font-calibri-regular">
            El Titular no es responsable de los daños y perjuicios que pudieran derivarse de la utilización de la información del Sitio Web.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Política de Cookies</p>
          <p className="font-calibri-regular">
            Puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies en la página de Política de Cookies.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Enlaces a otros sitios Web</p>
          <p className="font-calibri-regular">
            El Titular puede proporcionarle acceso a sitios Web de terceros mediante enlaces con la finalidad exclusiva de informar sobre la
            existencia de otras fuentes de información en Internet en las que podrá ampliar los datos ofrecidos en el Sitio Web.
          </p>

          <p className="mt-5 font-calibri-regular">
            Estos enlaces a otros sitios Web no suponen en ningún caso una sugerencia o recomendación para que usted visite las páginas web de
            destino, que están fuera del control del Titular, por lo que el Titular no es responsable del contenido de los sitios web vinculados ni
            del resultado que obtenga al seguir los enlaces. Asimismo, el Titular no responde de los links o enlaces ubicados en los sitios web
            vinculados a los que le proporciona acceso.
          </p>

          <p className="mt-5 font-calibri-regular">
            El establecimiento del enlace no implica en ningún caso la existencia de relaciones entre el Titular y el propietario del sitio en el que
            se establezca el enlace, ni la aceptación o aprobación por parte del Titular de sus contenidos o servicios.
          </p>

          <p className="mt-5 font-calibri-regular">
            Si accede a un sitio web externo desde un enlace que encuentre en el Sitio Web usted deberá leer la propia política de privacidad del otro
            sitio web que puede ser diferente de la de este sitio Web.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Propiedad Intelectual Industrial</p>
          <p className="font-calibri-regular">Todos los derechos están reservados.</p>

          <p className="mt-5 font-calibri-regular">
            Todo acceso a este Sitio Web está sujeto a las siguientes condiciones: la reproducción, almacenaje permanente y la difusión de los
            contenidos o cualquier otro uso que tenga finalidad pública o comercial queda expresamente prohibida sin el consentimiento previo expreso
            y por escrito del Titular.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Limitación de responsabilidad</p>
          <p className="font-calibri-regular">
            El Titular declina cualquier responsabilidad en caso de que existan interrupciones o un mal funcionamiento de los Servicios o contenidos
            ofrecidos en Internet, cualquiera que sea su causa. Asimismo, el Titular no se hace responsable por caídas de la red, pérdidas de negocio
            a consecuencia de dichas caídas, suspensiones temporales de fluido eléctrico o cualquier otro tipo de daño indirecto que te pueda ser
            causado por causas ajenas a el Titular.
          </p>

          <p className="mt-5 font-calibri-regular">
            Antes de tomar decisiones y/o acciones con base a la información incluida en el Sitio Web, el Titular le recomienda comprobar y contrastar
            la información recibida con otras fuentes.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Jurisdicción</p>
          <p className="font-calibri-regular">Este Aviso Legal se rige íntegramente por la legislación vigente en los Estados Unidos Mexicanos.</p>

          <p className="mt-5 font-calibri-bold text-2xl">Contacto</p>
          <p className="font-calibri-regular">
            En caso de que usted tenga cualquier duda acerca de este Aviso Legal o quiera realizar cualquier comentario sobre el Sitio Web, puede
            enviar un mensaje de correo electrónico a la dirección: {contactEmail}
          </p>
        </Container>
      )}
      {lang === "en" && (
        <Container>
          <p className="text-2xl font-calibri-bold mt-14">Terms and Conditions</p>

          <p className="font-calibri-bold text-2xl mt-5">Identification and Ownership</p>
          <p className="font-calibri-regular">
            In compliance with the applicable transparency and information society services regulations, the Owner sets forth its identification data:
          </p>

          <p className="mt-5 font-calibri-regular">Owner: AVIONICA SALTAMONTES SRL DE CV</p>
          <p className="font-calibri-regular">Tax ID (RFC): ASA2210202XA</p>
          <p className="font-calibri-regular">Address: C. Revolución de 1910 N 590, Centro, La Paz, Baja California Sur, 23000, Mexico.</p>
          <p className="font-calibri-regular">Email: {contactEmail}</p>
          <p className="font-calibri-regular">Website: {siteUrl}</p>

          <p className="mt-5 font-calibri-bold text-2xl">Purpose</p>
          <p className="font-calibri-regular">The purpose of the Website is: Executive aircraft rental.</p>

          <p className="mt-5 font-calibri-bold text-2xl">Conditions of Use</p>
          <p className="font-calibri-regular">
            The use of the Website grants you the status of User and implies full acceptance of all clauses and conditions of use included in the
            following pages:
          </p>

          <p className="mt-5 font-calibri-regular">Legal Notice</p>
          <p className="font-calibri-regular">Privacy Policy</p>
          <p className="font-calibri-regular">Cookies Policy</p>
          <p className="font-calibri-regular">
            If you do not agree with each and every one of these clauses and conditions, please refrain from using the Website.
          </p>

          <p className="mt-5 font-calibri-regular">
            Access to the Website does not, in any way, represent the beginning of a commercial relationship with the Owner.
          </p>

          <p className="mt-5 font-calibri-regular">
            Through the Website, the Owner provides access to and use of various contents that the Owner and/or its collaborators have published on
            the Internet.
          </p>

          <p className="mt-5 font-calibri-regular">
            To this end, you are obliged and committed NOT to use any of the website's content for illegal purposes or effects prohibited in this
            Legal Notice or by current legislation; that are harmful to the rights and interests of third parties; or that in any way may damage,
            disable, overload, deteriorate, or prevent the normal use of the content, computer equipment, documents, files, and all kinds of content
            stored on any computer equipment owned or contracted by the Owner, other users, or any Internet user.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Security Measures</p>
          <p className="font-calibri-regular">
            Personal data provided to the Owner may be stored in automated or non-automated databases, the ownership of which corresponds exclusively
            to the Owner. The Owner assumes all technical, organizational, and security measures that guarantee the confidentiality, integrity, and
            quality of the information contained therein, in accordance with current data protection regulations.
          </p>

          <p className="mt-5 font-calibri-regular">
            However, you must be aware that the security measures of computer systems on the Internet are not entirely reliable. Therefore, the Owner
            cannot guarantee the absence of viruses or other elements that may cause alterations to the User's computer systems (software and
            hardware) or to their electronic documents and files, although the Owner employs all necessary means and takes appropriate security
            measures to avoid the presence of these harmful elements.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Personal Data Processing</p>
          <p className="font-calibri-regular">
            You can consult all information regarding the processing of personal data collected by the Owner on the Privacy Policy page.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Content</p>
          <p className="font-calibri-regular">
            The Owner has obtained the information, multimedia content, and materials included on the Website from sources considered reliable.
            However, while all reasonable measures have been taken to ensure that the information provided is correct, the Owner does not guarantee
            that it is accurate, complete, or up to date. The Owner expressly declines any responsibility for errors or omissions in the information
            contained within the pages of the Website.
          </p>

          <p className="mt-5 font-calibri-regular">
            It is prohibited to transmit or send any illegal or illicit content, computer viruses, or messages that, in general, affect or violate the
            rights of the Owner or third parties through the Website.
          </p>

          <p className="mt-5 font-calibri-regular">
            The contents of the Website are for informational purposes only and under no circumstances should they be used or considered as an offer
            to sell, a solicitation of an offer to buy, or a recommendation to perform any other operation, unless expressly indicated.
          </p>

          <p className="mt-5 font-calibri-regular">
            The Owner reserves the right to modify, suspend, cancel, or restrict the content of the Website, links, or information obtained through
            the Website without prior notice.
          </p>

          <p className="mt-5 font-calibri-regular">
            El Titular no es responsable de los daños y perjuicios que pudieran derivarse de la utilización de la información del Sitio Web.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Cookies Policy</p>
          <p className="font-calibri-regular">
            You can consult all information regarding the collection and processing of cookies on the Cookies Policy page.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Links to Other Websites</p>
          <p className="font-calibri-regular">
            The Owner may provide access to third-party websites through links for the sole purpose of informing about the existence of other sources
            of information on the Internet where you may expand the data offered on the Website.
          </p>

          <p className="mt-5 font-calibri-regular">
            These links to other websites do not in any case constitute a suggestion or recommendation for you to visit the destination pages, which
            are beyond the Owner's control. Therefore, the Owner is not responsible for the content of linked websites or the results obtained by
            following the links. Likewise, the Owner is not responsible for the links located on the linked websites to which it provides access.
          </p>

          <p className="mt-5 font-calibri-regular">
            The establishment of a link does not imply the existence of a relationship between the Owner and the owner of the site where the link is
            established, nor the acceptance or approval by the Owner of its contents or services.
          </p>

          <p className="mt-5 font-calibri-regular">
            If you access an external website from a link found on this Website, you should read the privacy policy of the other website, which may
            differ from this Website's policy.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Intellectual and Industrial Property</p>
          <p className="font-calibri-regular">All rights reserved.</p>

          <p className="mt-5 font-calibri-regular">
            All access to this Website is subject to the following conditions: the reproduction, permanent storage, and dissemination of the contents
            or any other use for public or commercial purposes is expressly prohibited without the prior express written consent of the Owner.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Limitation of Liability</p>
          <p className="font-calibri-regular">
            The Owner declines any responsibility in the event of interruptions or malfunctions of the Services or content offered on the Internet,
            regardless of the cause. Likewise, the Owner is not responsible for network outages, business losses resulting from such outages,
            temporary power failures, or any other type of indirect damage that may be caused by reasons beyond the Owner's control.
          </p>

          <p className="mt-5 font-calibri-regular">
            Before making decisions and/or taking actions based on the information included on the Website, the Owner recommends checking and
            contrasting the information received with other sources.
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Jurisdiction</p>
          <p className="font-calibri-regular">
            This Legal Notice is governed entirely by the legislation in force in the United Mexican States (Mexico).
          </p>

          <p className="mt-5 font-calibri-bold text-2xl">Contact</p>
          <p className="font-calibri-regular">
            If you have any questions regarding this Legal Notice or would like to make any comments about the Website, you may send an email to:
            {contactEmail}
          </p>
        </Container>
      )}
    </section>
  );
};

export default Info;
