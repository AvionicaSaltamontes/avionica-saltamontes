import Container from "@/components/container/Main";

const Info = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com";

  return (
    <section className="py-10">
      <Container>
        <p className="mt-14 text-2xl font-calibri-bold">Política de Privacidad</p>

        <p className="mt-5 font-calibri-regular">
          Aviónica Saltamontes S.A. de C.V., operando como Aviónica Saltamontes, con el portal de {siteUrl}, es el responsable
          del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
        </p>

        <p className="font-calibri-bold text-2xl mt-5">¿Para qué fines utilizaremos sus datos personales?</p>
        <p className="font-calibri-regular">
          Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que
          solicita:
        </p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-regular">Para poner a su disposición los servicios y proyectos de Aviónica Saltamontes.</p>
          <p className="font-calibri-regular">
            Además, para personalizar nuestros servicios, mejorar su experiencia y mantener una comunicación efectiva.
          </p>
        </div>

        <p className="mt-5 font-calibri-regular">
          De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio
          solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
        </p>

        <p className="mt-5 font-calibri-regular">Mercadotecnia o publicitaria</p>
        <p className="font-calibri-regular">Prospección comercial</p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-regular">
            En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo enviando un correo a
            {contactEmail}
          </p>
          <p className="font-calibri-regular">
            La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y
            productos que solicita o contrata con nosotros.
          </p>
        </div>

        <p className="font-calibri-bold text-2xl mt-5">¿Qué datos personales utilizaremos para estos fines?</p>
        <p className="font-calibri-regular">
          Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
        </p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-regular">Datos de identificación y/o contacto: nombre, correo electrónico.</p>
        </div>

        <p className="font-calibri-bold text-2xl mt-5">¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</p>
        <p className="font-calibri-regular">
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos
          (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o
          incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada
          adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen
          como derechos ARCO.
        </p>

        <p className="mt-5 font-calibri-regular">
          Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio:
        </p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-regular">Enviando una solicitud al correo electrónico {contactEmail}</p>
        </div>

        <p className="mt-5 font-calibri-regular">
          Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:
        </p>

        <p className="mt-5 font-calibri-regular">
          a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?
        </p>
        <p className="mt-2 font-calibri-regular">
          Por medio del correo electrónico <span className="font-calibri-bold">{contactEmail}</span>
        </p>

        <p className="mt-5 font-calibri-regular">b) ¿Qué información y/o documentación deberá contener la solicitud?</p>

        <p className="mt-2 font-calibri-regular">El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud;</p>
        <p className="font-calibri-regular">Los documentos que acrediten la identidad o, en su caso, la representación legal del titular;</p>
        <p className="font-calibri-regular">
          La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados;
        </p>
        <p className="font-calibri-regular">
          Cualquier otro elemento o documento que facilite la localización de los datos controvertidos, y las modificaciones a realizarse; y
        </p>
        <p className="font-calibri-regular">Aportar la documentación que sustente su petición.</p>

        <p className="mt-5 font-calibri-regular">c) ¿En cuántos días le daremos respuesta a su solicitud?</p>
        <p className="mt-2 font-calibri-bold">15 días hábiles.</p>

        <p className="mt-5 font-calibri-regular">d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?</p>
        <p className="mt-2 font-calibri-regular">
          Por medio del correo electrónico <span className="font-calibri-bold">{contactEmail}</span>
        </p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-regular">
            Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos
            ARCO, son los siguientes:
          </p>
          <p className="mt-3 font-calibri-regular">Departamento de recepción de información</p>
          <p className="font-calibri-regular">
            Correo electrónico: <span className="font-calibri-bold">{contactEmail}</span>
          </p>
        </div>

        <p className="font-calibri-bold text-2xl mt-5">Usted puede revocar o limitar su consentimiento para el uso de sus datos personales</p>
        <p>
          Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es
          importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es
          posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que, para ciertos
          fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su
          relación con nosotros.
        </p>

        <p className="mt-5 font-calibri-regular">
          Para revocar o limitar su consentimiento deberá presentar su solicitud a través del siguiente medio:
        </p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-regular">
            Enviando una solicitud al correo electrónico <span className="font-calibri-bold">{contactEmail}</span>
          </p>
        </div>

        <p className="mt-5 font-calibri-regular">Usted puede revocar o limitar su consentimiento para el uso de sus datos personales</p>
        <p className="font-calibri-regular">
          Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es
          importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es
          posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que, para ciertos
          fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su
          relación con nosotros.
        </p>

        <p className="mt-5 font-calibri-regular">
          Para revocar o limitar su consentimiento deberá presentar su solicitud a través del siguiente medio:
        </p>

        <p className="mt-2 font-calibri-regular">Correo electrónico {contactEmail}</p>
        <p className="mt-2 font-calibri-regular">
          Con relación al procedimiento y requisitos para la revocación de su consentimiento, le informamos lo siguiente:
        </p>
        <p className="mt-5 font-calibri-regular">
          a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?
        </p>
        <p className="mt-2 font-calibri-regular">
          Por medio del correo electrónico <span className="font-calibri-bold">{contactEmail}</span>
        </p>

        <p className="mt-5 font-calibri-regular">b) ¿Qué información y/o documentación deberá contener la solicitud?</p>
        <p className="mt-2 font-calibri-regular">El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud;</p>
        <p className="font-calibri-regular">Los documentos que acrediten la identidad o, en su caso, la representación legal del titular;</p>
        <p className="font-calibri-regular">
          La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados;
        </p>
        <p className="font-calibri-regular">
          Cualquier otro elemento o documento que facilite la localización de los datos controvertidos, y las modificaciones a realizarse; y
        </p>
        <p className="font-calibri-regular">Aportar la documentación que sustente su petición.</p>

        <p className="mt-5 font-calibri-regular">c) ¿En cuántos días le daremos respuesta a su solicitud?</p>
        <p className="mt-2 font-calibri-bold">15 días hábiles.</p>

        <p className="mt-5 font-calibri-regular">d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?</p>
        <p className="mt-2 font-calibri-regular">
          Por medio del correo electrónico <span className="font-calibri-bold">{contactEmail}</span>
        </p>

        <p className="mt-5 font-calibri-regular">e) Para más información sobre el procedimiento</p>
        <p className="mt-2 font-calibri-regular">Ponemos a disposición la siguiente página web: {siteUrl}</p>

        <p className="font-calibri-bold text-2xl mt-5">¿Cómo puede conocer los cambios en este aviso de privacidad?</p>
        <p className="font-calibri-regular">
          El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de
          nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo
          de negocio, o por otras causas.
        </p>

        <p className="mt-3 font-calibri-regular">
          Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de este medio.
        </p>

        <div className="mt-5 p-5 bg-neutral-100">
          <p className="font-calibri-bold text-2xl">Su consentimiento para el tratamiento de sus datos personales</p>

          <p className="font-calibri-regular">
            Consiento que mis datos personales sean tratados de conformidad con los términos y condiciones informados en el presente aviso de
            privacidad.
          </p>
        </div>

        <p className="font-calibri-bold text-2xl mt-5">AVIÓNICA SALTAMONTES® 2026 Todos los derechos reservados.</p>
      </Container>
    </section>
  );
};

export default Info;
