// ═══════════════════════════════════════════════════════════════
// BANCO DE PREGUNTAS — 200+ preguntas distribuidas por tema
// ═══════════════════════════════════════════════════════════════
const BANCO = [

// ──────────────────────────────────────────────
// UF1 — SERVICIOS DE RED (45 preguntas)
// ──────────────────────────────────────────────
{ tema:'UF1', p:'¿Qué significa el concepto de "despliegue" (deployment) en el ciclo de vida del software?', ops:['La fase de análisis y diseño del sistema','Las tareas para trasladar una app terminada a producción','El proceso de eliminar versiones antiguas del sistema','La etapa de mantenimiento y corrección de errores'], r:1, e:'El despliegue son las tareas que finalizan la fase de implementación y trasladan la aplicación web probada a la fase de implantación o producción.' },
{ tema:'UF1', p:'¿Cuál es la diferencia entre escalado vertical y escalado horizontal?', ops:['El vertical añade más servidores; el horizontal aumenta recursos de uno','El vertical aumenta recursos (RAM/CPU) de un servidor; el horizontal añade más servidores','El vertical es más barato; el horizontal es más caro','No hay diferencia práctica entre ambos tipos'], r:1, e:'El escalado vertical aumenta recursos del mismo servidor. El horizontal añade más servidores, mejorando tolerancia a fallos.' },
{ tema:'UF1', p:'En el modelo IaaS, ¿qué gestiona el cliente y qué gestiona el proveedor?', ops:['El cliente gestiona todo; el proveedor no interviene','El proveedor gestiona aplicaciones y datos; el cliente el hardware','El cliente gestiona desde el SO hacia arriba; el proveedor gestiona hardware y virtualización','El proveedor gestiona todo; el cliente solo accede a la interfaz'], r:2, e:'En IaaS el proveedor gestiona hardware, virtualización, almacenamiento y red. El cliente gestiona SO, middleware, datos y aplicaciones.' },
{ tema:'UF1', p:'¿Qué empresa lanzó el primer servicio de computación en la nube a gran escala en 2006?', ops:['Microsoft Azure','Google Cloud','Amazon Web Services (AWS)','IBM Cloud'], r:2, e:'AWS fue la primera en ofrecer virtualización a gran escala con EC2 (Elastic Compute Cloud) y S3 en 2006.' },
{ tema:'UF1', p:'En el modelo SaaS, ¿qué responsabilidad tiene el usuario final?', ops:['Gestionar el hardware y la virtualización','Administrar el sistema operativo y el middleware','Configurar la red y el almacenamiento','Únicamente usar la aplicación contratada'], r:3, e:'En SaaS el proveedor gestiona todo, incluyendo la aplicación. El usuario solo la usa sin preocuparse de nada más.' },
{ tema:'UF1', p:'¿Qué significa el acrónimo DNS?', ops:['Dynamic Network Service','Domain Name System','Distributed Naming Service','Data Network Standard'], r:1, e:'DNS = Domain Name System. Sistema de nombres de dominio que traduce nombres a direcciones IP.' },
{ tema:'UF1', p:'¿Qué organismo gestiona globalmente el dominio raíz del árbol DNS?', ops:['IETF','W3C','ICANN','IANA únicamente'], r:2, e:'ICANN (Internet Corporation for Assigned Names and Numbers) gestiona el dominio raíz y aprueba actualizaciones.' },
{ tema:'UF1', p:'¿Qué es un TLD (Top-Level Domain)?', ops:['Un servidor DNS secundario','Un dominio de primer nivel bajo el dominio raíz','Un subdominio de segundo nivel','Un registro de recursos de tipo MX'], r:1, e:'TLD es un dominio de primer nivel que se encuentra directamente bajo el dominio raíz, como .com, .es, .org.' },
{ tema:'UF1', p:'¿Cuál es la diferencia entre ccTLD y gTLD?', ops:['ccTLD son para empresas; gTLD para países','ccTLD son geográficos de país (2 letras); gTLD son genéricos (3+ letras)','ccTLD requieren pago; gTLD son gratuitos','No existe diferencia funcional entre ambos'], r:1, e:'ccTLD son de país con 2 letras (.es, .fr). gTLD son genéricos con 3+ letras (.com, .org, .net).' },
{ tema:'UF1', p:'¿Para qué sirve el dominio especial .arpa en DNS?', ops:['Para dominios de empresas privadas','Para realizar resoluciones inversas (IP → nombre)','Para dominios de infraestructura gubernamental','Para registrar dominios internacionales'], r:1, e:'El dominio .arpa se usa para resoluciones inversas. Concretamente in-addr.arpa para IPv4 e ip6.arpa para IPv6.' },
{ tema:'UF1', p:'¿Qué es una resolución DNS directa?', ops:['Obtener la dirección IP a partir de un nombre de dominio','Obtener el nombre de dominio a partir de una IP','Transferir una zona DNS entre servidores','Renovar el registro TTL de un recurso'], r:0, e:'La resolución directa obtiene la IP a partir del nombre (nombre → IP). La inversa hace lo contrario (IP → nombre).' },
{ tema:'UF1', p:'¿Qué tipo de registro DNS se usa para obtener la IPv4 de un dominio?', ops:['AAAA','MX','A','NS'], r:2, e:'El registro de tipo A resuelve un nombre de dominio FQDN a su dirección IPv4.' },
{ tema:'UF1', p:'¿Qué tipo de registro DNS se usa para correo electrónico?', ops:['TXT','CNAME','SRV','MX'], r:3, e:'El registro MX (Mail eXchange) indica qué máquinas gestionan el correo del dominio, con prioridades incluidas.' },
{ tema:'UF1', p:'¿Qué hace el registro DNS de tipo CNAME?', ops:['Indica la dirección IPv6 de un servidor','Asigna alias a nombres reales de máquina','Marca el inicio de autoridad de la zona','Especifica el servidor de nombres de la zona'], r:1, e:'CNAME (Canonical Name) permite asignar alias a nombres reales, como usar "www" para referirse a un servidor web.' },
{ tema:'UF1', p:'¿Qué significa SOA en registros DNS?', ops:['Secondary Optional Address','Start Of Authority','Simple Object Attribute','Server Origin Announcement'], r:1, e:'SOA = Start Of Authority. Debe ser el primer registro de la zona e identifica al servidor como autoritario.' },
{ tema:'UF1', p:'¿Qué campo TTL indica en un registro de recursos DNS?', ops:['El tipo de protocolo que usa el registro','El tiempo de vida del registro en caché','El tamaño máximo del registro en bytes','El número de servidores redundantes'], r:1, e:'TTL (Time To Live) indica cuánto tiempo pueden los servidores caché mantener el registro antes de actualizarlo.' },
{ tema:'UF1', p:'Un servidor DNS primario frente a uno secundario: ¿cuál es la diferencia principal?', ops:['El primario solo responde consultas; el secundario edita zonas','El primario puede editar zonas; el secundario obtiene datos por transferencia de zona','El primario es más rápido; el secundario es redundante','No existe diferencia, son sinónimos'], r:1, e:'El primario edita la zona directamente. El secundario obtiene la información por transferencia de zona del primario, sin poder editarla.' },
{ tema:'UF1', p:'¿Qué es el FQDN (Fully Qualified Domain Name)?', ops:['Un tipo especial de registro DNS','El nombre de dominio completo desde el nodo hasta la raíz','Un formato de archivo para zonas DNS','Un protocolo de transferencia entre servidores DNS'], r:1, e:'FQDN es el nombre de dominio completamente calificado, formado por todos los nodos desde el más a la izquierda hasta la raíz.' },
{ tema:'UF1', p:'¿Cuántos niveles puede tener como máximo el espacio de nombres DNS?', ops:['63 niveles','127 niveles','255 niveles','32 niveles'], r:1, e:'El árbol DNS puede tener hasta 127 niveles, aunque lo habitual es usar 3-5 niveles como máximo.' },
{ tema:'UF1', p:'¿Sobre qué protocolo funciona el servicio LDAP?', ops:['UDP únicamente','IPX/SPX','TCP/IP (capa de aplicación)','NetBIOS'], r:2, e:'LDAP es un protocolo de capa de aplicación TCP/IP que sigue la filosofía cliente-servidor.' },
{ tema:'UF1', p:'¿En qué protocolo está basado LDAP?', ops:['X.400','X.509','X.500','X.25'], r:2, e:'LDAP está basado en el protocolo X.500 surgido del modelo OSI, simplificado para funcionar sobre TCP/IP.' },
{ tema:'UF1', p:'¿Qué significa el acrónimo LDIF?', ops:['Linux Directory Information Format','LDAP Data Interchange Format','Lightweight Directory Index File','Local Domain Identification Framework'], r:1, e:'LDIF = LDAP Data Interchange Format. Formato de texto ASCII que usan los servidores LDAP para insertar y extraer información.' },
{ tema:'UF1', p:'En el árbol DIT de LDAP, ¿qué significan las siglas DIT?', ops:['Data Interchange Tree','Directory Information Tree','Distributed Index Table','Domain Identity Token'], r:1, e:'DIT = Directory Information Tree. El árbol jerárquico invertido donde se organiza la información en LDAP.' },
{ tema:'UF1', p:'¿Qué es OpenLDAP?', ops:['Una implementación propietaria de Microsoft de LDAP','Una implementación libre y de código abierto de LDAP para GNU/Linux','Un protocolo alternativo a LDAP para Windows','Una herramienta de gestión de DNS en sistemas Unix'], r:1, e:'OpenLDAP es la implementación libre (open source) de LDAP, alternativa al Active Directory de Microsoft, para sistemas GNU/Linux.' },
{ tema:'UF1', p:'¿Cuáles son los tres tipos de objectClass en LDAP?', ops:['Primario, secundario y terciario','Estructural, auxiliar y abstracta','Obligatorio, opcional y heredado','Interno, externo y compartido'], r:1, e:'Los tres tipos son: estructural (para crear entradas), auxiliar (se añade a cualquier entrada) y abstracta (para entidades inexistentes).' },
{ tema:'UF1', p:'¿Qué herramienta de Linux permite gestionar la asignación de recursos a procesos en contenedores LXC?', ops:['namespaces','systemd','cgroups','chroot'], r:2, e:'cgroups permite gestionar la asignación de recursos a cada uno de los procesos en un contenedor.' },
{ tema:'UF1', p:'¿En qué año surgieron los contenedores LXC actuales?', ops:['1999','2001','2004','2008'], r:3, e:'Los contenedores LXC actuales existen desde 2008, aunque hubo intentos anteriores desde 1982 con chroot.' },
{ tema:'UF1', p:'¿Qué es una imagen Docker?', ops:['Una instancia en ejecución de un contenedor','Una plantilla de solo lectura con nombre y versión que contiene una aplicación','Un archivo de configuración YAML para orquestación','Una copia de seguridad del sistema de archivos'], r:1, e:'Una imagen Docker es una plantilla de solo lectura con nombre:versión que contiene la aplicación sobre un SO mínimo.' },
{ tema:'UF1', p:'¿Qué es un contenedor Docker?', ops:['Una imagen almacenada en Docker Hub','Una instancia en ejecución de una imagen Docker','Un archivo Dockerfile compilado','Un volumen persistente de datos'], r:1, e:'Un contenedor es una instancia de una imagen puesta en funcionamiento, que recibe un identificador único de 64 caracteres.' },
{ tema:'UF1', p:'¿Qué es Docker Hub?', ops:['El cliente de línea de comandos de Docker','El demonio del servicio Docker','Un almacén de imágenes Docker públicas y privadas','El motor de contenedores de Docker'], r:2, e:'Docker Hub es el registro más conocido, desde donde se pueden descargar imágenes públicas (docker image pull) o subir las propias.' },
{ tema:'UF1', p:'¿Para qué sirve Docker Compose?', ops:['Para compilar imágenes Docker desde Dockerfile','Para gestionar el escalado de más de un contenedor con un único archivo YAML','Para crear redes virtuales entre contenedores individuales','Para monitorizar el rendimiento de contenedores en producción'], r:1, e:'Docker Compose permite gestionar el escalado local de múltiples contenedores de forma centralizada con un único archivo docker-compose.yml.' },
{ tema:'UF1', p:'¿Qué distribución Linux se recomienda para contenedores Docker por su tamaño reducido?', ops:['Ubuntu Server','Debian Minimal','Alpine Linux','CentOS Stream'], r:2, e:'Alpine Linux está optimizada para contenedores, ocupa menos de 50 MB y está disponible para x86_64.' },
{ tema:'UF1', p:'¿Qué versiones de Docker existen?', ops:['Community Edition (CE) y Enterprise Edition (EE)','Standard y Professional','Open y Closed','Personal y Business'], r:0, e:'Docker tiene Community Edition (CE, código abierto) y Enterprise Edition (EE, de pago con soporte ininterrumpido).' },
{ tema:'UF1', p:'¿Qué modelo fusiona los departamentos de desarrollo y operaciones?', ops:['Agile Scrum','Kanban','DevOps','Extreme Programming (XP)'], r:2, e:'DevOps fusiona los departamentos de desarrollo y operaciones para trabajar con metodologías ágiles e integración/distribución continuas (CI/CD).' },
{ tema:'UF1', p:'¿Qué significa PaaS?', ops:['Private as a Service','Platform as a Service','Processing as a Service','Protocol as a Service'], r:1, e:'PaaS = Platform as a Service. El desarrollador se olvida del hardware y SO y se centra solo en la aplicación y los datos.' },
{ tema:'UF1', p:'¿Qué ejemplo de PaaS se menciona en el temario?', ops:['AWS EC2','Google BigQuery','Heroku','Microsoft SQL Server'], r:2, e:'Heroku es un ejemplo de PaaS que facilita el despliegue de aplicaciones web desde su dashboard o CLI.' },
{ tema:'UF1', p:'¿Qué servicio de AWS se llama EC2?', ops:['Elastic Content Cache','Elastic Compute Cloud','Extended Container Cluster','Enterprise Cloud Computing'], r:1, e:'EC2 = Elastic Compute Cloud. Es el servicio de virtualización de servidores de Amazon Web Services.' },
{ tema:'UF1', p:'¿Qué es el alojamiento in-house?', ops:['Alojar servidores en centros de datos externos','Contratar servicios cloud con pago por uso','Alojar todos los servidores y aplicaciones dentro de las instalaciones propias de la organización','Usar contenedores en la nube pública'], r:2, e:'El alojamiento in-house es el modelo clásico donde la organización aloja y mantiene todos sus servidores en sus propias instalaciones.' },
{ tema:'UF1', p:'¿Qué significa LDAP en español?', ops:['Protocolo ligero de acceso a directorios','Lenguaje de descripción de atributos de protocolo','Protocolo de autenticación local de datos','Lenguaje de acceso distribuido a páginas'], r:0, e:'LDAP = Lightweight Directory Access Protocol = Protocolo ligero de acceso a directorios.' },
{ tema:'UF1', p:'¿Qué sustituye LDAP en los sistemas Unix/Linux?', ops:['Kerberos','NFS','NIS','RADIUS'], r:2, e:'El servicio LDAP sustituye al servicio NIS (Network Information Service) para la autenticación centralizada.' },
{ tema:'UF1', p:'¿Qué tipo de servidor DNS reenvía consultas a otro servidor para resolver nombres fuera del dominio?', ops:['Primario','Secundario','Caché','Reenviador'], r:3, e:'El servidor reenviador es designado por otros servidores DNS para resolver nombres fuera del dominio en el que se encuentran.' },
{ tema:'UF1', p:'¿Cuántos caracteres máximo puede tener cada nodo del árbol DNS?', ops:['32 caracteres','63 caracteres','127 caracteres','255 caracteres'], r:1, e:'Cada nodo del árbol DNS puede contener un máximo de 63 caracteres en su etiqueta.' },
{ tema:'UF1', p:'¿Qué archivo define los límites de recursos en cgroups?', ops:['/etc/cgroups/limits.conf','/etc/security/limits.conf','/proc/cgroups/config','/var/lib/cgroups.conf'], r:1, e:'En el archivo /etc/security/limits.conf se pueden definir los límites de recursos para cgroups.' },
{ tema:'UF1', p:'¿Qué es CaaS?', ops:['Control as a Service','Container as a Service','Compute and Application Service','Cloud Application Service'], r:1, e:'CaaS = Container as a Service. Una nueva capa de servicios en la nube que integra la tecnología de contenedores.' },
{ tema:'UF1', p:'¿Qué herramienta permite dar nombre a procesos y recursos en contenedores LXC?', ops:['cgroups','chroot','namespaces','systemd'], r:2, e:'La herramienta namespaces de GNU/Linux permite dar nombre a procesos y recursos para que puedan verse entre sí si comparten nombre.' },

// ──────────────────────────────────────────────
// UF2 — SERVIDORES WEB (40 preguntas)
// ──────────────────────────────────────────────
{ tema:'UF2', p:'¿Cuál es la función principal de un servidor web?', ops:['Ejecutar aplicaciones de escritorio remotamente','Almacenar y servir recursos web a clientes que los solicitan','Gestionar el sistema de nombres de dominio','Administrar bases de datos relacionales'], r:1, e:'El servidor está siempre en escucha, a la espera de peticiones de clientes para buscar y servir la información solicitada.' },
{ tema:'UF2', p:'¿Qué significa HTTP?', ops:['Hypertext Transfer Protocol','Hyperlink Text Transfer Process','High Transfer Text Protocol','Hypertext Transmission and Processing'], r:0, e:'HTTP = Hypertext Transfer Protocol. Es el protocolo usado por la World Wide Web para transferir información.' },
{ tema:'UF2', p:'¿En qué arquitectura hay un servidor de aplicaciones y un servidor de base de datos separados?', ops:['Arquitectura cliente-servidor simple','Arquitectura de dos niveles','Arquitectura de tres niveles','Arquitectura monolítica'], r:2, e:'En la arquitectura de tres niveles existe el cliente, el servidor de aplicaciones y el servidor de base de datos (puede estar en máquina distinta).' },
{ tema:'UF2', p:'¿Cuál es el stack LAMP?', ops:['Linux, Apache, MySQL, PHP','Linux, Apache, MongoDB, Python','Linux, Angular, MySQL, PHP','Lighttpd, Apache, MariaDB, Perl'], r:0, e:'LAMP es: Linux (SO) + Apache (servidor web) + MySQL (SGBD) + PHP (lenguaje de programación).' },
{ tema:'UF2', p:'¿Cuál es el equivalente propietario del stack LAMP?', ops:['MEAN','WISA','MERN','MAMP'], r:1, e:'WISA es el stack propietario: Windows + IIS + SQL Server + ASP.' },
{ tema:'UF2', p:'¿Cuál es la función de un servidor proxy?', ops:['Actúa solo como almacén de imágenes estáticas','Intermediario entre cliente y servidor con funciones de caché, filtrado y balanceo','Reemplaza al servidor DNS en redes locales','Gestiona exclusivamente la autenticación de usuarios'], r:1, e:'El proxy actúa en la capa de aplicación como intermediario, ofreciendo caché, filtrado de contenidos, control de acceso, balanceo de carga y anonimato.' },
{ tema:'UF2', p:'¿Qué versión de HTTP introdujo las conexiones persistentes por defecto?', ops:['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'], r:2, e:'HTTP/1.1 introdujo las conexiones persistentes (keep-alive) por defecto, reduciendo la sobrecarga de establecer nuevas conexiones.' },
{ tema:'UF2', p:'¿Qué es una URL?', ops:['Un tipo de registro DNS','Un identificador uniforme de recursos (Uniform Resource Locator)','Un protocolo de transferencia de archivos','Un método de petición HTTP'], r:1, e:'URL = Uniform Resource Locator. Identifica de forma única un recurso en la web y se usa para hacer peticiones.' },
{ tema:'UF2', p:'¿Qué tipo MIME indica un archivo HTML?', ops:['application/html','text/html','text/plain','document/html'], r:1, e:'El tipo MIME de HTML es text/html. Los tipos MIME identifican el formato del contenido que se transmite.' },
{ tema:'UF2', p:'¿Qué método HTTP se usa para enviar datos al servidor (por ejemplo, un formulario)?', ops:['GET','HEAD','POST','OPTIONS'], r:2, e:'POST envía datos al servidor en el cuerpo de la petición, usado en formularios, subida de archivos, etc.' },
{ tema:'UF2', p:'¿Qué método HTTP se usa para solicitar un recurso sin modificarlo?', ops:['PUT','POST','DELETE','GET'], r:3, e:'GET solicita un recurso del servidor. Es el método más común y no debe modificar el estado del servidor.' },
{ tema:'UF2', p:'¿Qué código de estado HTTP indica que un recurso no fue encontrado?', ops:['200','301','403','404'], r:3, e:'El código 404 (Not Found) indica que el servidor no encontró el recurso solicitado.' },
{ tema:'UF2', p:'¿Qué código de estado HTTP indica éxito en la petición?', ops:['200','302','500','401'], r:0, e:'El código 200 (OK) indica que la petición fue procesada correctamente y el servidor devuelve el recurso.' },
{ tema:'UF2', p:'¿Qué código de estado indica un error interno del servidor?', ops:['400','403','404','500'], r:3, e:'El código 500 (Internal Server Error) indica que el servidor encontró una condición inesperada que le impidió completar la petición.' },
{ tema:'UF2', p:'¿Qué diferencia HTTPS de HTTP?', ops:['HTTPS usa el puerto 80; HTTP usa el 443','HTTPS añade cifrado mediante TLS/SSL sobre HTTP','HTTPS es más lento porque cifra menos información','HTTPS solo funciona en redes locales'], r:1, e:'HTTPS = HTTP + TLS/SSL. Añade cifrado, autenticación e integridad sobre el protocolo HTTP estándar.' },
{ tema:'UF2', p:'¿Qué significa PKI?', ops:['Private Key Infrastructure','Public Knowledge Interface','Public Key Infrastructure','Protocol Key Integration'], r:2, e:'PKI = Public Key Infrastructure (Infraestructura de clave pública). Gestiona certificados digitales y claves criptográficas.' },
{ tema:'UF2', p:'¿Qué diferencia hay entre cifrado simétrico y asimétrico?', ops:['El simétrico usa dos claves distintas; el asimétrico una sola','El simétrico usa una clave compartida; el asimétrico usa par público/privado','El simétrico es más seguro; el asimétrico más rápido','No hay diferencia relevante en HTTPS'], r:1, e:'Cifrado simétrico usa la misma clave para cifrar y descifrar. Asimétrico usa par de claves (pública para cifrar, privada para descifrar).' },
{ tema:'UF2', p:'¿Qué protocolo sustituye a SSL en las conexiones HTTPS modernas?', ops:['SSH','IPsec','TLS','SFTP'], r:2, e:'TLS (Transport Layer Security) ha reemplazado a SSL (ahora obsoleto). En la práctica se dice SSL/TLS.' },
{ tema:'UF2', p:'¿Qué son los hosts virtuales basados en nombres?', ops:['Múltiples servidores físicos con un dominio','Múltiples sitios web en el mismo servidor diferenciados por el nombre de dominio','Máquinas virtuales con distinto hardware asignado','Servidores DNS secundarios para un mismo dominio'], r:1, e:'Los virtual hosts basados en nombres permiten alojar múltiples sitios en un mismo servidor IP, diferenciados por el host name de la petición.' },
{ tema:'UF2', p:'¿En qué se diferencian los hosts virtuales basados en puertos de los basados en nombres?', ops:['Los basados en puertos usan distintos dominios; los basados en nombres, distintos puertos','Los basados en puertos diferencian sitios por el número de puerto; los basados en nombres por el dominio','Los basados en puertos son más seguros por definición','No existe diferencia funcional entre ambos tipos'], r:1, e:'Los virtual hosts basados en puertos usan distintos números de puerto para diferenciar sitios (ej: :8080, :8081). Los de nombres usan el header Host.' },
{ tema:'UF2', p:'¿Cuál es el puerto estándar de HTTP?', ops:['21','22','80','443'], r:2, e:'HTTP usa el puerto 80 por defecto. HTTPS usa el 443.' },
{ tema:'UF2', p:'¿Cuál es el puerto estándar de HTTPS?', ops:['80','8080','443','8443'], r:2, e:'HTTPS usa el puerto 443 por defecto. HTTP usa el 80.' },
{ tema:'UF2', p:'¿Qué es el hosting?', ops:['El servicio de registro de nombres de dominio únicamente','El servicio que permite a empresas alojar sus sitios web en servidores de terceros','El protocolo para transferir archivos entre servidores','La tecnología de virtualización de servidores físicos'], r:1, e:'El hosting es el servicio que permite a organizaciones alojar sus sitios web y aplicaciones en servidores gestionados por empresas especializadas.' },
{ tema:'UF2', p:'¿Qué contiene la cabecera "Host" en una petición HTTP?', ops:['La dirección IP del cliente','El nombre del dominio solicitado y, opcionalmente, el puerto','El tipo de contenido que acepta el cliente','El método de autenticación usado'], r:1, e:'La cabecera Host contiene el nombre del servidor de destino (dominio) y opcionalmente el puerto, esencial para los virtual hosts por nombre.' },
{ tema:'UF2', p:'¿Qué es el cacheo en un proxy?', ops:['Filtrar peticiones maliciosas antes de llegar al servidor','Almacenar temporalmente respuestas para servirlas sin consultar el servidor de nuevo','Redirigir peticiones a servidores alternativos automáticamente','Comprimir el tráfico entre cliente y servidor'], r:1, e:'El cacheo almacena temporalmente respuestas del servidor. Si otro cliente solicita el mismo recurso, el proxy lo sirve desde su caché, ahorrando tiempo y ancho de banda.' },
{ tema:'UF2', p:'¿En qué arquitectura el cliente, el servidor de aplicaciones y el servidor de base de datos son tres entidades separadas?', ops:['Arquitectura monolítica','Arquitectura cliente-servidor clásica','Arquitectura de tres niveles','Arquitectura peer-to-peer'], r:2, e:'En la arquitectura de tres niveles existen tres capas: presentación (cliente), lógica de negocio (servidor de apps) y datos (SGBD).' },
{ tema:'UF2', p:'¿Qué significan los tipos MIME en HTTP?', ops:['Los métodos de identificación de máquinas en la red','Los identificadores del formato del contenido que se transmite','Los mensajes de error del protocolo HTTP','Los tipos de conexión entre cliente y servidor'], r:1, e:'MIME (Multipurpose Internet Mail Extensions) identifica el tipo de contenido que se transmite, como text/html, application/json, image/png.' },
{ tema:'UF2', p:'¿Qué código de estado HTTP indica una redirección permanente?', ops:['200','301','302','304'], r:1, e:'El código 301 (Moved Permanently) indica que el recurso ha sido movido permanentemente a una nueva URL.' },
{ tema:'UF2', p:'¿Cuál de los siguientes NO es un método HTTP estándar?', ops:['GET','POST','FETCH','DELETE'], r:2, e:'FETCH no es un método HTTP del protocolo. Los métodos estándar incluyen GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH.' },
{ tema:'UF2', p:'¿Qué es un servidor web?', ops:['Un equipo especializado en gestionar bases de datos','Un software o hardware que sirve recursos web a clientes bajo petición','Un dispositivo que conecta redes locales con Internet','Un programa para crear páginas web estáticas'], r:1, e:'Un servidor web es el software (o el equipo que lo ejecuta) que atiende peticiones de clientes y les devuelve los recursos solicitados.' },
{ tema:'UF2', p:'¿Cuál es la característica principal de HTTP respecto al estado de las conexiones?', ops:['HTTP mantiene el estado entre peticiones','HTTP es un protocolo stateless (sin estado)','HTTP cifra todas las comunicaciones','HTTP requiere autenticación en cada sesión'], r:1, e:'HTTP es un protocolo sin estado (stateless): cada petición es independiente y el servidor no recuerda peticiones anteriores por defecto.' },
{ tema:'UF2', p:'¿Qué herramienta se usa para gestionar las cookies y sesiones en aplicaciones web sobre HTTP?', ops:['El sistema DNS local','El encabezado Set-Cookie y las sesiones en servidor','El protocolo LDAP','Los registros MX del dominio'], r:1, e:'Las cookies se envían con Set-Cookie en la respuesta y se almacenan en el cliente para mantener sesiones sobre el protocolo stateless HTTP.' },
{ tema:'UF2', p:'¿Cuál fue la primera versión de HTTP en introducir el soporte de múltiples recursos por conexión (pipelining)?', ops:['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2'], r:3, e:'HTTP/2 introdujo la multiplexación de streams, permitiendo múltiples peticiones simultáneas sobre una misma conexión TCP.' },
{ tema:'UF2', p:'¿Qué tipo de proxy oculta la identidad de los clientes al servidor?', ops:['Proxy inverso','Proxy transparente','Proxy anónimo','Proxy caché'], r:2, e:'El proxy anónimo oculta la dirección IP del cliente al servidor de destino, proporcionando anonimato.' },
{ tema:'UF2', p:'¿Qué es un proxy inverso?', ops:['Un proxy que oculta la identidad del cliente','Un proxy que se coloca delante del servidor para distribuir carga y protegerlo','Un proxy que filtra contenido para los clientes','Un proxy exclusivamente de caché'], r:1, e:'Un proxy inverso se coloca delante de los servidores para distribuir carga, cachear, proteger y optimizar las peticiones entrantes.' },
{ tema:'UF2', p:'En HTTP, ¿qué es una petición (request)?', ops:['La respuesta que el servidor manda al cliente','El mensaje que el cliente envía al servidor solicitando un recurso','El proceso de cifrado TLS','El archivo de configuración del servidor web'], r:1, e:'Una petición HTTP es el mensaje que el cliente envía al servidor especificando qué recurso quiere y con qué método.' },
{ tema:'UF2', p:'¿Qué componente identifica el protocolo, host, puerto y ruta en una URL?', ops:['El método HTTP','Los headers de la petición','La URL (Uniform Resource Locator)','El cuerpo de la respuesta'], r:2, e:'La URL contiene: esquema (https://), host (dominio), puerto opcional, ruta (/recurso) y parámetros opcionales.' },
{ tema:'UF2', p:'¿Qué código de estado indica que el cliente no tiene permisos para acceder al recurso?', ops:['401','403','404','500'], r:1, e:'El código 403 (Forbidden) indica que el servidor entiende la petición pero se niega a autorizarla (sin permisos).' },
{ tema:'UF2', p:'¿Qué indica el código HTTP 401?', ops:['Recurso no encontrado','No autorizado (falta autenticación)','Éxito en la petición','Error interno del servidor'], r:1, e:'El código 401 (Unauthorized) indica que se requiere autenticación para acceder al recurso solicitado.' },

// ──────────────────────────────────────────────
// UF3 — SERVIDORES DE APLICACIONES (40 preguntas)
// ──────────────────────────────────────────────
{ tema:'UF3', p:'¿Cuál es el servidor de aplicaciones Java más utilizado para aprender en entornos educativos y de desarrollo?', ops:['JBoss EAP','GlassFish','Apache Tomcat','IBM WebSphere'], r:2, e:'Apache Tomcat es el servidor de aplicaciones Java más extendido en entornos educativos y de desarrollo web.' },
{ tema:'UF3', p:'¿Qué especificación gestiona Jakarta EE?', ops:['Oracle Corporation','Sun Microsystems','Eclipse Foundation','Apache Software Foundation'], r:2, e:'Jakarta EE facilita un conjunto de especificaciones gestionadas por Eclipse Foundation (antes Java EE era de Oracle).' },
{ tema:'UF3', p:'¿Cuáles son las tres ediciones de Java mencionadas en el temario?', ops:['Java Web, Java Desktop, Java Mobile','Java SE, Java EE, Java ME','Java Core, Java Extended, Java Micro','Java Standard, Java Advanced, Java Lite'], r:1, e:'Las tres ediciones son: Java SE (Standard Edition), Java EE (Enterprise Edition) y Java ME (Micro Edition).' },
{ tema:'UF3', p:'¿Qué hace un servlet Java?', ops:['Es una página HTML con código Java incrustado','Es un componente Java que gestiona peticiones y respuestas HTTP en el servidor','Es un cliente Java para consumir servicios web','Es una clase Java para conectarse a bases de datos'], r:1, e:'Un servlet es un componente Java que se ejecuta en el servidor para gestionar peticiones y generar respuestas HTTP de forma dinámica.' },
{ tema:'UF3', p:'¿Qué son las JSP (JavaServer Pages)?', ops:['Ficheros de configuración de Apache Tomcat','Páginas que mezclan HTML con código Java para generar contenido dinámico','Protocolo de comunicación entre servlets','Archivos de despliegue comprimidos en formato ZIP'], r:1, e:'Las JSP son páginas que combinan HTML con código Java incrustado, compiladas en servlets por el servidor para generar contenido dinámico.' },
{ tema:'UF3', p:'¿Cuál es el formato de archivo de despliegue de aplicaciones web Java?', ops:['ZIP','JAR','WAR','EAR'], r:2, e:'WAR (Web Application Archive) es el formato de archivo para desplegar aplicaciones web Java en servidores como Tomcat.' },
{ tema:'UF3', p:'¿En qué directorio de Tomcat se despliegan las aplicaciones web?', ops:['/home/tomcat/apps','/var/www/html','/webapps','/opt/apps'], r:2, e:'Las aplicaciones web Java se despliegan en el directorio webapps de la instalación de Tomcat.' },
{ tema:'UF3', p:'¿Qué variable de entorno principal necesita Apache Tomcat?', ops:['TOMCAT_HOME','CATALINA_HOME','JAVA_WEB','JAVA_APP'], r:1, e:'CATALINA_HOME es la variable de entorno principal que apunta al directorio raíz de instalación de Apache Tomcat.' },
{ tema:'UF3', p:'¿En qué archivo XML de Tomcat se configuran los conectores y los hosts virtuales?', ops:['web.xml','context.xml','server.xml','catalina.xml'], r:2, e:'server.xml es el archivo principal de configuración de Tomcat donde se definen conectores, hosts virtuales y servicios.' },
{ tema:'UF3', p:'¿Qué es una cookie en el contexto de aplicaciones web?', ops:['Un archivo de contraseñas cifrado del servidor','Un pequeño fragmento de datos que el servidor envía al navegador para mantener estado','Un tipo de certificado SSL para HTTPS','Un método de autenticación de dos factores'], r:1, e:'Una cookie es un pequeño fragmento de datos que el servidor envía al navegador. El navegador lo almacena y lo reenvía en peticiones siguientes para mantener estado.' },
{ tema:'UF3', p:'¿Cuál es la diferencia entre una cookie de sesión y una cookie persistente?', ops:['Las de sesión se almacenan en el servidor; las persistentes en el cliente','Las de sesión expiran al cerrar el navegador; las persistentes tienen fecha de expiración','Las de sesión son inseguras; las persistentes están cifradas','No hay diferencia funcional'], r:1, e:'Las cookies de sesión se eliminan al cerrar el navegador. Las persistentes tienen una fecha de expiración y permanecen en disco.' },
{ tema:'UF3', p:'¿Qué problema resuelve el manejo de sesiones en aplicaciones web?', ops:['La velocidad de procesamiento del servidor','Mantener el estado entre peticiones en un protocolo stateless como HTTP','El cifrado de comunicaciones entre cliente y servidor','La distribución de carga entre múltiples servidores'], r:1, e:'El manejo de sesiones permite mantener el estado del usuario entre peticiones, ya que HTTP es stateless por naturaleza.' },
{ tema:'UF3', p:'¿Qué es el CATALINA_BASE en Tomcat?', ops:['El directorio de instalación de Java','El directorio con la configuración específica de una instancia de Tomcat','El archivo de log principal de Tomcat','La variable que apunta a las aplicaciones desplegadas'], r:1, e:'CATALINA_BASE apunta al directorio de configuración específica de cada instancia cuando se ejecutan múltiples instancias de Tomcat.' },
{ tema:'UF3', p:'¿Cuáles son las tres especificaciones marco de Jakarta EE?', ops:['Jakarta Web, Jakarta Core, Jakarta Micro','Jakarta EE Platform, Jakarta EE Web Profile, Jakarta EE Core Profile','Jakarta Standard, Jakarta Enterprise, Jakarta Mobile','Jakarta Full, Jakarta Lite, Jakarta Nano'], r:1, e:'Las tres especificaciones marco de Jakarta EE son: Jakarta EE Platform, Jakarta EE Web Profile y Jakarta EE Core Profile.' },
{ tema:'UF3', p:'¿Qué servidor de Apache Foundation implementa la especificación completa de Jakarta EE?', ops:['Apache Tomcat','Apache TomEE','Apache HTTP Server','Apache Kafka'], r:1, e:'Apache TomEE es el servidor de Apache que implementa la especificación completa de Jakarta EE, a diferencia de Tomcat que implementa un subconjunto.' },
{ tema:'UF3', p:'¿Cómo se configura SSL/TLS en Apache Tomcat?', ops:['Modificando el archivo web.xml','Añadiendo un conector HTTPS en server.xml con el certificado correspondiente','Instalando un módulo mod_ssl','Cambiando la variable JAVA_HOME'], r:1, e:'SSL/TLS en Tomcat se configura añadiendo un conector HTTPS en server.xml, especificando el puerto 443, el certificado y la clave privada.' },
{ tema:'UF3', p:'¿Qué es el gestor de aplicaciones de Tomcat (Manager App)?', ops:['Una herramienta de línea de comandos para compilar servlets','Una interfaz web para desplegar, arrancar, parar y eliminar aplicaciones en Tomcat','Un archivo de configuración XML','Un módulo de seguridad de Tomcat'], r:1, e:'El Manager App es una interfaz web integrada en Tomcat que permite gestionar el ciclo de vida de las aplicaciones desplegadas.' },
{ tema:'UF3', p:'¿Para qué sirve el archivo web.xml en una aplicación web Java?', ops:['Para configurar el servidor Tomcat global','Para definir el descriptor de despliegue de la aplicación web (servlets, filtros, listeners)','Para especificar las variables de entorno de Java','Para gestionar las conexiones de base de datos'], r:1, e:'web.xml es el descriptor de despliegue de la aplicación web Java. Define servlets, filtros, listeners, páginas de error y configuraciones de seguridad.' },
{ tema:'UF3', p:'¿Qué arquitectura en capas sigue Jakarta EE?', ops:['Solo capa de cliente y capa de servidor','Capa de cliente, capa de presentación, capa de servicios de negocio y capa de datos','Capa física, capa lógica y capa de acceso','Capa de red, capa de transporte y capa de aplicación'], r:1, e:'Jakarta EE define 4 capas: capa de cliente, capa de presentación (servlets/JSP), capa de servicios de negocio y capa de datos.' },
{ tema:'UF3', p:'¿Qué lenguaje de programación es la base de Apache Tomcat?', ops:['Python','Ruby','Java','C++'], r:2, e:'Apache Tomcat está desarrollado en Java y es el servidor de referencia para aplicaciones web Java EE / Jakarta EE.' },
{ tema:'UF3', p:'¿Qué es una sesión HTTP en el contexto de Tomcat?', ops:['Una conexión TCP persistente entre cliente y servidor','Un identificador único que permite asociar múltiples peticiones del mismo usuario','Una instancia de base de datos temporal','Un archivo de configuración temporal del usuario'], r:1, e:'Una sesión HTTP asocia múltiples peticiones del mismo usuario mediante un identificador de sesión (JSESSIONID en Tomcat).' },
{ tema:'UF3', p:'¿Cuál es el puerto por defecto de Apache Tomcat?', ops:['80','443','8080','8443'], r:2, e:'Apache Tomcat usa el puerto 8080 por defecto para HTTP y 8443 para HTTPS.' },
{ tema:'UF3', p:'¿Qué hace el elemento <Connector> en server.xml de Tomcat?', ops:['Define las aplicaciones desplegadas','Configura los parámetros de la conexión (puerto, protocolo, SSL)','Establece los usuarios administradores','Configura el pool de conexiones a la base de datos'], r:1, e:'El elemento <Connector> en server.xml configura cómo Tomcat acepta conexiones: protocolo, puerto, tiempo de espera, parámetros SSL, etc.' },
{ tema:'UF3', p:'¿Qué es Apache Tomcat en términos de componentes Jakarta EE?', ops:['Implementa la especificación completa de Jakarta EE Platform','Implementa principalmente Jakarta Servlet, JSP y Expression Language (subconjunto)','Es equivalente a GlassFish en funcionalidad','No implementa ninguna especificación de Jakarta EE'], r:1, e:'Tomcat implementa un subconjunto de Jakarta EE: principalmente Servlet, JSP, EL (Expression Language), WebSocket y algunas más.' },
{ tema:'UF3', p:'¿Qué significa EAR en Java EE?', ops:['Extended Application Resource','Enterprise Application Archive','Embedded Application Runtime','External Accessible Repository'], r:1, e:'EAR = Enterprise Application Archive. Es el formato de empaquetado para aplicaciones empresariales completas en Java EE.' },
{ tema:'UF3', p:'¿Cómo se protege la aplicación Manager de Tomcat?', ops:['Deshabilitar el firewall','Configurar roles y usuarios en tomcat-users.xml','Usar SSL automáticamente','No necesita protección en redes locales'], r:1, e:'La Manager App de Tomcat se protege configurando usuarios y roles (manager-gui, admin-gui) en el archivo tomcat-users.xml.' },
{ tema:'UF3', p:'¿Qué attributo de la cookie indica que solo se transmite por HTTPS?', ops:['HttpOnly','SameSite','Secure','Persistent'], r:2, e:'El atributo Secure de la cookie indica que solo debe transmitirse sobre conexiones HTTPS cifradas.' },
{ tema:'UF3', p:'¿Qué hace el atributo HttpOnly de una cookie?', ops:['Hace que la cookie solo funcione en HTTP, no HTTPS','Impide que JavaScript acceda a la cookie, mitigando ataques XSS','Define que la cookie expira con la sesión','Limita la cookie a un dominio específico'], r:1, e:'HttpOnly impide el acceso a la cookie desde JavaScript, protegiendo contra ataques de robo de cookies mediante XSS.' },
{ tema:'UF3', p:'¿Qué técnica de seguridad permite aislar diferentes aplicaciones web en Tomcat?', ops:['Usar diferentes puertos únicamente','Configurar Security Manager de Java para limitar permisos de cada app','Instalar antivirus en el servidor','Usar contraseñas diferentes para cada aplicación'], r:1, e:'El Java Security Manager puede configurarse en Tomcat para limitar los permisos de cada aplicación web, aislándolas entre sí.' },
{ tema:'UF3', p:'¿Qué es IBM WebSphere Liberty?', ops:['Un servidor HTTP de código abierto','Un servidor de aplicaciones certificado por Jakarta EE','Una distribución Linux para servidores Java','Un framework de desarrollo Java'], r:1, e:'IBM WebSphere Liberty es uno de los servidores de aplicaciones certificados como compatibles con Jakarta EE.' },
{ tema:'UF3', p:'¿En qué directorio de Tomcat están los archivos de log?', ops:['/var/log/tomcat','/tomcat/logs','logs/ dentro de CATALINA_HOME','catalina/log/'], r:2, e:'Los archivos de log de Tomcat se encuentran en el directorio logs/ dentro del directorio de instalación (CATALINA_HOME).' },
{ tema:'UF3', p:'¿Qué es el archivo context.xml en Tomcat?', ops:['El archivo de log principal','El descriptor de contexto de una aplicación web o de configuración global','El archivo de usuarios administradores','El archivo de definición de conectores'], r:1, e:'context.xml define la configuración del contexto de una aplicación web en Tomcat: recursos, parámetros de entorno, fuentes de datos, etc.' },
{ tema:'UF3', p:'¿Qué significa JSP?', ops:['Java Secure Protocol','JavaServer Pages','Java Simple Process','Java System Programming'], r:1, e:'JSP = JavaServer Pages. Tecnología de Java para crear páginas web dinámicas con código Java incrustado en HTML.' },
{ tema:'UF3', p:'¿Cuál es la diferencia entre un servidor web y un servidor de aplicaciones?', ops:['No existe diferencia, son sinónimos','El servidor web sirve contenido estático; el servidor de aplicaciones ejecuta lógica de negocio dinámica','El servidor de aplicaciones solo gestiona bases de datos','El servidor web es más potente que el servidor de aplicaciones'], r:1, e:'El servidor web sirve contenido estático (HTML, CSS, imágenes). El servidor de aplicaciones ejecuta lógica de negocio y genera contenido dinámico.' },
{ tema:'UF3', p:'¿Qué conector utiliza Tomcat para integrarse con servidores web como Apache HTTP Server?', ops:['HTTP Connector','AJP Connector','NIO Connector','HTTPS Connector'], r:1, e:'AJP (Apache JServ Protocol) Connector permite la comunicación entre Apache HTTP Server y Tomcat de forma eficiente.' },
{ tema:'UF3', p:'¿Qué archivo de Tomcat define usuarios y roles para el Manager?', ops:['server.xml','web.xml','context.xml','tomcat-users.xml'], r:3, e:'tomcat-users.xml define los usuarios, contraseñas y roles que pueden acceder al Manager y Host Manager de Tomcat.' },
{ tema:'UF3', p:'¿Cuáles son los cuatro elementos software principales de un servidor web según el temario?', ops:['Firewall, proxy, DNS y balanceador','SO, servidor web, SGBD y lenguaje de programación','CPU, RAM, almacenamiento y red','Kernel, shell, interfaz gráfica y aplicaciones'], r:1, e:'Los cuatro elementos software del servidor son: sistema operativo, servidor web, sistema gestor de bases de datos y lenguaje de programación.' },
{ tema:'UF3', p:'¿Qué es GlassFish en el ecosistema Java EE?', ops:['Un framework de testing para servlets','El servidor de aplicaciones de referencia de Jakarta EE, mantenido por Eclipse','Un ORM de Java para bases de datos relacionales','Una alternativa open-source a Maven'], r:1, e:'Eclipse GlassFish es el servidor de aplicaciones de referencia para Jakarta EE, mantenido por Eclipse Foundation.' },
{ tema:'UF3', p:'¿Qué tipo de objeto gestiona el ciclo de vida de peticiones HTTP en Tomcat?', ops:['JSP','EJB','Servlet','Listener'], r:2, e:'Los servlets gestionan el ciclo de vida de peticiones HTTP en Tomcat, siendo la unidad fundamental de procesamiento de peticiones.' },
{ tema:'UF3', p:'¿Qué es JAVA_HOME?', ops:['El directorio de instalación de Tomcat','La variable de entorno que apunta al directorio de instalación del JDK/JRE','El archivo de configuración de variables de Tomcat','La ruta de acceso a las clases de Jakarta EE'], r:1, e:'JAVA_HOME es la variable de entorno que apunta al directorio raíz de la instalación del JDK o JRE, necesaria para ejecutar Tomcat.' },

// ──────────────────────────────────────────────
// UF4 — TRANSFERENCIA DE ARCHIVOS (40 preguntas)
// ──────────────────────────────────────────────
{ tema:'UF4', p:'¿Qué significa FTP?', ops:['File Transfer Protocol','Fast Transfer Process','File Transmission Path','Federated Transfer Protocol'], r:0, e:'FTP = File Transfer Protocol. Protocolo estándar para la transferencia de archivos en redes TCP/IP.' },
{ tema:'UF4', p:'¿Qué diferencia fundamental tiene SFTP respecto a FTP?', ops:['SFTP es más rápido porque usa un único canal','SFTP usa cifrado SSH para securizar toda la transferencia; FTP transmite en texto plano','SFTP solo funciona en redes locales; FTP en Internet','SFTP no requiere autenticación; FTP sí'], r:1, e:'SFTP (SSH File Transfer Protocol) cifra toda la comunicación usando SSH, a diferencia de FTP que transmite datos y credenciales en texto plano.' },
{ tema:'UF4', p:'¿Cuántas conexiones TCP usa FTP en su funcionamiento?', ops:['Una conexión única para datos y control','Dos conexiones: una de control y una de datos','Tres conexiones: control, datos y estado','Una conexión multiplex para todo'], r:1, e:'FTP usa dos conexiones TCP: una de control (puerto 21) para comandos y una de datos (puerto 20 en modo activo) para transferir archivos.' },
{ tema:'UF4', p:'¿En qué puerto opera la conexión de control de FTP?', ops:['20','21','22','23'], r:1, e:'La conexión de control de FTP opera en el puerto 21. El puerto 20 es el de datos en modo activo.' },
{ tema:'UF4', p:'¿Qué diferencia el modo activo del modo pasivo en FTP?', ops:['El modo activo es más rápido; el pasivo más seguro','En modo activo el servidor inicia la conexión de datos; en modo pasivo el cliente la inicia','En modo pasivo usa el puerto 21; en modo activo el 22','No hay diferencia práctica en redes modernas'], r:1, e:'En modo activo el servidor FTP inicia la conexión de datos al cliente. En modo pasivo, el cliente inicia ambas conexiones, mejor con firewalls.' },
{ tema:'UF4', p:'¿Por qué el modo pasivo FTP es más compatible con firewalls?', ops:['Porque usa un puerto fijo conocido por todos los firewalls','Porque el cliente inicia todas las conexiones, evitando que el firewall bloquee conexiones entrantes al cliente','Porque cifra automáticamente las comunicaciones','Porque usa UDP en lugar de TCP'], r:1, e:'En modo pasivo el cliente inicia la conexión de datos. Los firewalls suelen bloquear conexiones entrantes no solicitadas, lo que afecta al modo activo.' },
{ tema:'UF4', p:'¿Cuáles son los dos tipos de datos que puede transferir FTP?', ops:['Comprimido y sin comprimir','ASCII y Binario','Cifrado y en texto plano','Activo y pasivo'], r:1, e:'FTP puede transferir datos en modo ASCII (para archivos de texto) o en modo Binario (para archivos binarios, imágenes, ejecutables).' },
{ tema:'UF4', p:'¿Qué tipo de acceso FTP permite conectarse sin credenciales específicas?', ops:['Autorizado','Anónimo','Público','Invitado'], r:1, e:'El acceso FTP anónimo permite conectarse sin credenciales propias, usando convencionalmente "anonymous" como usuario y un email como contraseña.' },
{ tema:'UF4', p:'¿Qué significa el código de respuesta FTP 220?', ops:['Comando aceptado','Servicio listo (el servidor FTP está disponible)','Inicio de transferencia','Error de autenticación'], r:1, e:'El código 220 en FTP indica que el servicio está listo para nuevas conexiones de usuarios.' },
{ tema:'UF4', p:'¿Qué código FTP indica que la autenticación se completó correctamente?', ops:['200','230','331','530'], r:1, e:'El código 230 en FTP indica que el inicio de sesión del usuario fue correcto (User logged in).' },
{ tema:'UF4', p:'¿Cuál es la principal vulnerabilidad de seguridad de FTP estándar?', ops:['No soporta archivos mayores de 2GB','Las credenciales y datos se transmiten en texto plano sin cifrar','Tiene límites en el número de conexiones simultáneas','No funciona detrás de NAT'], r:1, e:'FTP transmite usuario, contraseña y datos completamente en texto plano, haciéndolo vulnerable a sniffing de red.' },
{ tema:'UF4', p:'¿Qué significa SFTP en sus siglas completas?', ops:['Secure File Transfer Protocol','SSH File Transfer Protocol','Simple File Transfer Protocol','Safe FTP'], r:1, e:'SFTP = SSH File Transfer Protocol. Es un protocolo de transferencia de archivos que opera sobre SSH, no es FTP con SSL.' },
{ tema:'UF4', p:'¿Sobre qué protocolo opera SFTP?', ops:['TLS/SSL','IPsec','SSH','HTTPS'], r:2, e:'SFTP opera completamente sobre SSH (Secure Shell), usando el mismo puerto 22 y aprovechando su cifrado.' },
{ tema:'UF4', p:'¿Qué puerto usa SSH (y por tanto SFTP) por defecto?', ops:['21','22','23','25'], r:1, e:'SSH usa el puerto 22 por defecto. SFTP al operar sobre SSH también usa el puerto 22.' },
{ tema:'UF4', p:'¿Qué es OpenSSH?', ops:['Una variante propietaria de SSH para servidores Windows','La implementación libre y de código abierto del protocolo SSH','Un servidor FTP seguro para Linux','Un certificado digital para SFTP'], r:1, e:'OpenSSH es la implementación libre y de código abierto del protocolo SSH, incluida por defecto en la mayoría de distribuciones Linux.' },
{ tema:'UF4', p:'¿Qué es SSHFS?', ops:['Un sistema de archivos que monta directorios remotos via SSH/SFTP como si fueran locales','Un servidor FTP que usa SSH para cifrado','Una variante de SSH para transferencia masiva de archivos','Un protocolo de backup sobre SSH'], r:0, e:'SSHFS (SSH Filesystem) permite montar un sistema de archivos remoto via SSH/SFTP como si fuera un directorio local del sistema.' },
{ tema:'UF4', p:'¿Qué ventaja tiene SSHFS respecto a otros métodos de acceso a archivos remotos?', ops:['Es el protocolo más rápido disponible','Permite acceder a archivos remotos via SSH sin instalar software adicional en el servidor (usa SFTP)','No requiere autenticación','Funciona sin conexión a Internet'], r:1, e:'SSHFS solo requiere que el servidor tenga SSH/SFTP habilitado, sin necesidad de configurar servidores adicionales de compartición de archivos.' },
{ tema:'UF4', p:'¿Cuál es el protocolo FTPS y en qué se diferencia de SFTP?', ops:['FTPS es FTP sobre SSH; SFTP es FTP sobre SSL','FTPS es FTP sobre SSL/TLS; SFTP es un protocolo diferente basado en SSH','FTPS y SFTP son el mismo protocolo con distinto nombre','FTPS es más antiguo y menos seguro que SFTP'], r:1, e:'FTPS = FTP + SSL/TLS (extensión de FTP con cifrado). SFTP es un protocolo completamente diferente que corre sobre SSH.' },
{ tema:'UF4', p:'¿Qué cliente FTP gráfico popular se menciona en el temario?', ops:['PuTTY','WinSCP','FileZilla','Cyberduck'], r:2, e:'FileZilla es uno de los clientes FTP más populares, multiplataforma y de código abierto.' },
{ tema:'UF4', p:'¿Qué servidor FTP de código abierto es muy utilizado en Linux?', ops:['FileZilla Server','ProFTPD / vsftpd','Apache FTP Server','OpenFTP'], r:1, e:'vsftpd (Very Secure FTP Daemon) y ProFTPD son los servidores FTP de código abierto más utilizados en sistemas Linux.' },
{ tema:'UF4', p:'¿En qué modo FTP puede haber problemas con NAT y firewalls?', ops:['Modo pasivo','Modo anónimo','Modo activo','Modo binario'], r:2, e:'En modo activo el servidor intenta conectarse al cliente, lo que puede ser bloqueado por firewalls o problemático con NAT.' },
{ tema:'UF4', p:'¿Qué comando SFTP permite listar los archivos del directorio remoto?', ops:['list','dir','ls','show'], r:2, e:'El comando ls en SFTP lista los archivos del directorio remoto (similar al ls de Unix/Linux).' },
{ tema:'UF4', p:'¿Qué comando SFTP permite descargar un archivo del servidor al cliente?', ops:['download','recv','get','fetch'], r:2, e:'El comando get en SFTP descarga un archivo del servidor remoto al sistema local del cliente.' },
{ tema:'UF4', p:'¿Qué comando SFTP permite subir un archivo del cliente al servidor?', ops:['upload','send','post','put'], r:3, e:'El comando put en SFTP sube (carga) un archivo desde el sistema local al servidor remoto.' },
{ tema:'UF4', p:'¿Cuál es la principal ventaja de SFTP sobre FTP en términos de seguridad?', ops:['SFTP usa dos canales cifrados; FTP uno','SFTP cifra datos Y credenciales; FTP los transmite en texto plano','SFTP tiene autenticación de dos factores integrada','SFTP usa certificados de cliente obligatorios'], r:1, e:'SFTP cifra tanto las credenciales (usuario/contraseña) como los datos transferidos, a diferencia de FTP que lo envía todo en texto plano.' },
{ tema:'UF4', p:'¿Qué significa el código de respuesta FTP 530?', ops:['Transferencia completa','Directorio cambiado','No se ha iniciado sesión / Autenticación fallida','Servicio no disponible'], r:2, e:'El código 530 en FTP indica que el inicio de sesión no fue correcto o que el usuario no tiene permiso.' },
{ tema:'UF4', p:'¿Cuántas conexiones usa SFTP para todas sus operaciones?', ops:['Dos, igual que FTP','Tres para mayor seguridad','Una única conexión SSH cifrada','Depende de si está en modo activo o pasivo'], r:2, e:'SFTP usa una única conexión SSH cifrada para todo (comandos y datos), a diferencia de FTP que usa dos conexiones separadas.' },
{ tema:'UF4', p:'¿Qué comando de Linux se usa para conectarse a un servidor SFTP?', ops:['ftp servidor','ssh-ftp usuario@servidor','sftp usuario@servidor','scp usuario@servidor'], r:2, e:'El comando sftp usuario@servidor establece una sesión SFTP interactiva con el servidor remoto vía SSH.' },
{ tema:'UF4', p:'¿Para qué se usa el comando scp?', ops:['Para copiar archivos de forma segura entre hosts usando SSH','Para configurar un servidor FTP','Para sincronizar directorios entre servidores','Para crear certificados SSL'], r:0, e:'scp (Secure Copy Protocol) usa SSH para copiar archivos entre hosts de forma segura, similar a cp pero a través de la red.' },
{ tema:'UF4', p:'¿Qué ventaja tiene FTP anónimo?', ops:['Mayor velocidad de transferencia','Permite compartir archivos públicos sin gestionar cuentas de usuario','Mayor seguridad por anonimización','Compatibilidad con todos los firewalls'], r:1, e:'El FTP anónimo permite distribuir archivos públicos (software libre, distribuciones Linux) sin necesidad de crear cuentas de usuario individuales.' },
{ tema:'UF4', p:'¿Qué protocolo reemplaza a Telnet para la administración segura de servidores?', ops:['FTP','SFTP','SSH','SNMP'], r:2, e:'SSH (Secure Shell) reemplaza a Telnet proporcionando una conexión cifrada para la administración remota de servidores.' },
{ tema:'UF4', p:'¿Qué significa el código FTP 226?', ops:['Inicio de sesión correcto','Transferencia de archivo completada correctamente','Directorio creado correctamente','Conexión de datos abierta'], r:1, e:'El código 226 en FTP indica que la acción sobre el archivo fue completada correctamente (Closing data connection, Transfer complete).' },
{ tema:'UF4', p:'¿Cuándo es recomendable usar modo pasivo FTP en lugar del activo?', ops:['Cuando se necesita mayor velocidad de transferencia','Cuando el cliente está detrás de un firewall o NAT','Cuando se transfieren archivos muy grandes','Cuando se requiere mayor seguridad en las credenciales'], r:1, e:'El modo pasivo es recomendable cuando el cliente está detrás de un firewall o NAT, ya que el cliente inicia todas las conexiones.' },
{ tema:'UF4', p:'¿Qué tipo de autenticación usa SFTP además de usuario/contraseña?', ops:['Certificados X.509','Par de claves pública/privada SSH','Tokens de hardware','Autenticación Kerberos exclusivamente'], r:1, e:'SFTP/SSH soporta autenticación mediante par de claves pública/privada SSH, considerada más segura que usuario/contraseña.' },
{ tema:'UF4', p:'¿Cuál es el puerto de datos en modo activo FTP?', ops:['20','21','22','25'], r:0, e:'En modo activo FTP, el servidor usa el puerto 20 para la conexión de datos. El control siempre usa el puerto 21.' },
{ tema:'UF4', p:'¿Qué tipo de modo de transferencia FTP se debe usar para imágenes y ejecutables?', ops:['ASCII','Texto','Binario','Comprimido'], r:2, e:'Para archivos binarios (imágenes, ejecutables, comprimidos) se debe usar el modo Binario en FTP para no alterar el contenido.' },
{ tema:'UF4', p:'¿Qué información transmite FTP en texto plano que lo hace inseguro?', ops:['Solo los metadatos de los archivos','Solo los nombres de los archivos transferidos','Usuario, contraseña y todos los datos transferidos','Solo los comandos, no los datos'], r:2, e:'FTP transmite en texto plano el nombre de usuario, la contraseña y todos los datos transferidos, haciéndolo vulnerable a interceptación.' },
{ tema:'UF4', p:'¿En qué capa del modelo OSI opera FTP?', ops:['Capa de red','Capa de transporte','Capa de aplicación','Capa de enlace'], r:2, e:'FTP es un protocolo de la capa de aplicación del modelo OSI/TCP-IP, igual que HTTP, SMTP o SSH.' },
{ tema:'UF4', p:'¿Qué permite el comando chmod en SFTP?', ops:['Cambiar el propietario de un archivo remoto','Modificar los permisos de un archivo en el servidor remoto','Comprimir archivos antes de transferirlos','Cifrar archivos individuales'], r:1, e:'El comando chmod en SFTP permite cambiar los permisos (permisos Unix) de archivos en el servidor remoto.' },

// ──────────────────────────────────────────────
// UF5 — DOCUMENTACIÓN Y CONTROL DE VERSIONES (40 preguntas)
// ──────────────────────────────────────────────
{ tema:'UF5', p:'¿Qué es el control de versiones en el desarrollo de software?', ops:['Un sistema para documentar errores del software','Un sistema que registra cambios en archivos a lo largo del tiempo, permitiendo recuperar versiones anteriores','Un protocolo para sincronizar código entre servidores','Una herramienta de análisis de código estático'], r:1, e:'El control de versiones registra los cambios realizados en archivos (código fuente) a lo largo del tiempo, permitiendo recuperar versiones anteriores.' },
{ tema:'UF5', p:'¿Qué tipo de sistema de control de versiones es Git?', ops:['Centralizado','Distribuido','Cliente-servidor','De red'], r:1, e:'Git es un sistema de control de versiones distribuido (DVCS): cada desarrollador tiene una copia completa del historial.' },
{ tema:'UF5', p:'¿Qué diferencia hay entre Git y GitHub?', ops:['Son exactamente lo mismo, diferente nombre','Git es el sistema de control de versiones local; GitHub es una plataforma web de alojamiento de repositorios Git','GitHub es más antiguo que Git','Git solo funciona en Linux; GitHub en todos los sistemas'], r:1, e:'Git es la herramienta de control de versiones. GitHub es una plataforma web de alojamiento y colaboración de repositorios Git.' },
{ tema:'UF5', p:'¿Qué comando Git inicializa un repositorio nuevo en un directorio?', ops:['git start','git create','git init','git new'], r:2, e:'git init inicializa un repositorio Git vacío en el directorio actual, creando el subdirectorio .git con la estructura necesaria.' },
{ tema:'UF5', p:'¿Qué hace el comando git clone?', ops:['Copia un archivo dentro del repositorio','Crea una copia local de un repositorio remoto completo','Duplica una rama en el mismo repositorio','Hace una copia de seguridad de los cambios locales'], r:1, e:'git clone crea una copia local completa de un repositorio remoto, incluyendo todo el historial de versiones.' },
{ tema:'UF5', p:'¿Qué hace el comando git add?', ops:['Añade un repositorio remoto','Añade archivos al área de staging (preparación) para el siguiente commit','Crea una nueva rama','Descarga cambios del repositorio remoto'], r:1, e:'git add añade los cambios de archivos al área de staging (índice), preparándolos para ser incluidos en el próximo commit.' },
{ tema:'UF5', p:'¿Qué hace el comando git commit?', ops:['Envía cambios al repositorio remoto','Guarda una instantánea permanente de los cambios del área de staging en el historial local','Mezcla dos ramas del repositorio','Descarga la última versión del repositorio remoto'], r:1, e:'git commit guarda una instantánea (snapshot) permanente de los cambios preparados en el área de staging en el historial del repositorio local.' },
{ tema:'UF5', p:'¿Qué hace el comando git push?', ops:['Descarga cambios del remoto al local','Envía los commits locales al repositorio remoto','Crea una nueva rama remota vacía','Fusiona ramas en el repositorio local'], r:1, e:'git push envía los commits locales al repositorio remoto (como GitHub), actualizando la rama remota.' },
{ tema:'UF5', p:'¿Qué hace el comando git pull?', ops:['Envía cambios locales al remoto','Descarga cambios del remoto y los fusiona con la rama local actual','Crea una copia local sin historial','Elimina ramas obsoletas'], r:1, e:'git pull descarga los cambios del repositorio remoto (git fetch) y los fusiona automáticamente con la rama local actual (git merge).' },
{ tema:'UF5', p:'¿Qué es una rama (branch) en Git?', ops:['Una copia de seguridad del repositorio completo','Un puntero a un commit específico que permite desarrollar en paralelo','Una versión etiquetada para producción','Un archivo de configuración del repositorio'], r:1, e:'Una rama en Git es un puntero ligero a un commit que permite desarrollar funcionalidades en paralelo sin afectar a la rama principal.' },
{ tema:'UF5', p:'¿Qué comando crea y cambia a una nueva rama en Git?', ops:['git branch nueva-rama','git create nueva-rama','git checkout -b nueva-rama','git switch --new nueva-rama'], r:2, e:'git checkout -b nombre-rama crea una nueva rama y cambia a ella inmediatamente. También se puede usar git switch -c.' },
{ tema:'UF5', p:'¿Qué hace git merge?', ops:['Elimina ramas obsoletas','Fusiona los cambios de una rama en otra','Crea un nuevo repositorio a partir de dos','Sincroniza el repositorio local con el remoto'], r:1, e:'git merge fusiona los cambios de una rama especificada en la rama actual, integrando los historiales.' },
{ tema:'UF5', p:'¿Qué es un commit en Git?', ops:['Una petición de integración de cambios','Una instantánea del estado del repositorio en un momento dado','Una copia de seguridad automática','Un identificador de usuario en GitHub'], r:1, e:'Un commit es una instantánea (snapshot) del estado del repositorio en un momento dado, con un identificador SHA-1 único y un mensaje descriptivo.' },
{ tema:'UF5', p:'¿Cómo se etiqueta una versión estable en Git?', ops:['git version v1.0','git tag v1.0','git release v1.0','git mark v1.0'], r:1, e:'git tag permite etiquetar commits específicos, muy usado para marcar versiones de lanzamiento (v1.0, v2.0, etc.).' },
{ tema:'UF5', p:'¿Qué es un repositorio remoto en Git?', ops:['Una carpeta local con configuración de red','Una copia del repositorio alojada en un servidor (como GitHub) accesible desde internet','El repositorio de otro usuario en la misma red local','Un repositorio cifrado localmente'], r:1, e:'Un repositorio remoto es una copia del repositorio alojada en un servidor (GitHub, GitLab, Bitbucket) accesible por internet o red.' },
{ tema:'UF5', p:'¿Qué es Javadoc?', ops:['Un IDE para desarrollo Java','Una herramienta que genera documentación HTML a partir de comentarios en código Java','Un servidor de aplicaciones Java de código abierto','Un framework de testing para Java'], r:1, e:'Javadoc es la herramienta oficial de Java para generar documentación API en HTML a partir de comentarios especiales en el código fuente.' },
{ tema:'UF5', p:'¿Qué sintaxis usan los comentarios de Javadoc?', ops:['// comentario','/* comentario */','/** comentario */','# comentario'], r:2, e:'Javadoc usa comentarios de bloque especiales que comienzan con /** y terminan con */, con etiquetas como @param, @return, @throws.' },
{ tema:'UF5', p:'¿Qué es MediaWiki?', ops:['Un gestor de contenidos exclusivo para noticias','El software de wiki usado por Wikipedia para documentación colaborativa web','Una herramienta de documentación de código automática','Un framework de testing web'], r:1, e:'MediaWiki es el software de wiki open source que usa Wikipedia. Permite crear documentación colaborativa en formato web.' },
{ tema:'UF5', p:'¿Qué es el comando man en Linux?', ops:['Un gestor de paquetes de Linux','El visor de páginas del manual (manual pages) de comandos y herramientas del sistema','Una herramienta de monitorización de procesos','Un editor de texto de terminal'], r:1, e:'man (manual) es el comando que muestra las páginas de manual de comandos, funciones y configuraciones del sistema en Linux.' },
{ tema:'UF5', p:'¿Qué es un Pull Request (PR) en GitHub?', ops:['Una descarga automática de cambios remotos','Una solicitud formal para integrar cambios de una rama en otra, con revisión de código','Un error en la subida de cambios al repositorio remoto','Una copia de seguridad automática de la rama principal'], r:1, e:'Un Pull Request es una solicitud en GitHub para integrar cambios de una rama en otra, permitiendo revisión de código y discusión antes de fusionar.' },
{ tema:'UF5', p:'¿Qué es el área de staging (índice) en Git?', ops:['El repositorio remoto donde se publica el código','Una zona intermedia donde se preparan los cambios antes de hacer commit','El directorio de trabajo con los archivos modificados','El historial completo de todos los commits'], r:1, e:'El área de staging (o índice) es una zona intermedia en Git donde se preparan selectivamente los cambios que se incluirán en el próximo commit.' },
{ tema:'UF5', p:'¿Qué hace el comando git status?', ops:['Muestra el historial de commits del repositorio','Muestra el estado actual del directorio de trabajo y del área de staging','Verifica la integridad del repositorio','Sincroniza el repositorio con el remoto'], r:1, e:'git status muestra el estado de los archivos: qué está modificado, qué está en staging y qué está sin seguimiento.' },
{ tema:'UF5', p:'¿Qué hace el comando git log?', ops:['Muestra los errores del repositorio','Muestra el historial de commits del repositorio','Lista las ramas disponibles','Muestra los archivos modificados sin confirmar'], r:1, e:'git log muestra el historial de commits del repositorio con autor, fecha, hash SHA-1 y mensaje de cada commit.' },
{ tema:'UF5', p:'¿Qué es el ciclo de vida del software?', ops:['El tiempo que tarda en compilarse una aplicación','La serie de fases desde que el software es concebido hasta que deja de usarse','El proceso de instalación en el servidor de producción','La documentación técnica de una aplicación'], r:1, e:'El ciclo de vida del software son todas las fases desde la concepción hasta el fin de uso: análisis, diseño, implementación, pruebas, despliegue y mantenimiento.' },
{ tema:'UF5', p:'¿Qué es un fork en GitHub?', ops:['Una rama dentro del mismo repositorio','Una copia de un repositorio de otro usuario en tu propia cuenta de GitHub','Un tipo de merge conflict','Una etiqueta de versión en el repositorio'], r:1, e:'Un fork es una copia de un repositorio ajeno en tu cuenta de GitHub, permitiendo trabajar en él de forma independiente.' },
{ tema:'UF5', p:'¿Cuál es la ventaja principal de un sistema de control de versiones distribuido como Git?', ops:['Es más sencillo de configurar que los sistemas centralizados','Cada desarrollador tiene una copia completa del historial, sin punto único de fallo','Solo funciona con conexión a internet','Requiere menos espacio en disco'], r:1, e:'En los sistemas distribuidos (como Git) cada desarrollador tiene una copia completa del repositorio e historial, sin depender de un servidor central.' },
{ tema:'UF5', p:'¿Qué archivo de Git especifica qué archivos o directorios no deben ser rastreados?', ops:['.gitconfig','.gitattributes','.gitignore','.gitkeep'], r:2, e:'.gitignore es el archivo que especifica qué archivos y directorios Git debe ignorar (no rastrear ni incluir en commits).' },
{ tema:'UF5', p:'¿Qué es un merge conflict (conflicto de fusión) en Git?', ops:['Un error de red al hacer git push','Una situación donde dos ramas modificaron las mismas líneas de forma incompatible y Git no puede fusionarlas automáticamente','Un commit incorrecto que debe revertirse','Un repositorio corrupto que requiere reparación'], r:1, e:'Un merge conflict ocurre cuando dos ramas han modificado las mismas líneas de un archivo de forma incompatible y Git no puede resolver automáticamente cuál mantener.' },
{ tema:'UF5', p:'¿Cuál es el comando para ver las ramas existentes en un repositorio Git?', ops:['git list','git branches','git branch','git show-branches'], r:2, e:'git branch (sin argumentos) lista todas las ramas locales del repositorio, destacando la actual con un asterisco.' },
{ tema:'UF5', p:'¿Qué etiqueta Javadoc se usa para documentar los parámetros de un método?', ops:['@argument','@param','@parameter','@input'], r:1, e:'La etiqueta @param en Javadoc documenta cada parámetro de un método, indicando su nombre y descripción.' },
{ tema:'UF5', p:'¿Qué etiqueta Javadoc se usa para documentar el valor de retorno?', ops:['@output','@result','@return','@returns'], r:2, e:'La etiqueta @return en Javadoc documenta el valor que devuelve un método.' },
{ tema:'UF5', p:'¿Qué hace el comando git revert?', ops:['Elimina el commit del historial','Crea un nuevo commit que deshace los cambios de un commit anterior, manteniendo el historial','Reinicia el repositorio a su estado inicial','Descarta todos los cambios no guardados'], r:1, e:'git revert crea un nuevo commit que invierte los cambios de un commit anterior, manteniendo el historial completo (más seguro que git reset).' },
{ tema:'UF5', p:'¿Qué es GitHub Actions?', ops:['Una herramienta de gestión de proyectos de GitHub','Un sistema de CI/CD integrado en GitHub para automatizar flujos de trabajo','El cliente de escritorio de GitHub','Una API para acceder a repositorios de GitHub'], r:1, e:'GitHub Actions es el sistema de CI/CD integrado en GitHub que permite automatizar flujos de trabajo como tests, builds y despliegues.' },
{ tema:'UF5', p:'¿Qué es la documentación de API?', ops:['Los comentarios dentro del código fuente','La documentación que describe cómo usar las interfaces públicas de una librería o servicio','El manual de usuario de la aplicación','El log de errores del servidor'], r:1, e:'La documentación de API describe las interfaces públicas (funciones, clases, endpoints) de una librería o servicio para que otros desarrolladores puedan usarla.' },
{ tema:'UF5', p:'¿Qué es CI/CD en el contexto de DevOps?', ops:['Control de Interfaces / Control de Datos','Continuous Integration / Continuous Delivery (Deployment)','Code Inspection / Code Deployment','Component Integration / Component Delivery'], r:1, e:'CI/CD = Continuous Integration (integración continua de código) / Continuous Delivery o Deployment (entrega o despliegue continuo a producción).' },
{ tema:'UF5', p:'¿Cuántos tipos de cuenta tiene GitHub según el temario?', ops:['Solo hay un tipo','Cuenta gratuita y cuenta de pago (Pro/Team/Enterprise)','Solo cuentas de empresa','Solo cuentas educativas'], r:1, e:'GitHub tiene diferentes tipos de cuenta: gratuita (Free), de pago individual (Pro), para equipos (Team) y empresarial (Enterprise).' },
{ tema:'UF5', p:'¿Qué comando Git muestra las diferencias entre el directorio de trabajo y el último commit?', ops:['git compare','git show','git diff','git changes'], r:2, e:'git diff muestra las diferencias entre el directorio de trabajo y el área de staging, o entre commits, mostrando líneas añadidas y eliminadas.' },
{ tema:'UF5', p:'¿Para qué sirve el comando git stash?', ops:['Para guardar temporalmente cambios sin confirmar y limpiar el directorio de trabajo','Para eliminar permanentemente archivos del repositorio','Para fusionar ramas automáticamente','Para sincronizar ramas remotas'], r:0, e:'git stash guarda temporalmente los cambios no confirmados del directorio de trabajo, permitiendo cambiar de rama con un estado limpio.' },
{ tema:'UF5', p:'¿Qué significan las siglas SHA-1 en el contexto de Git?', ops:['System Hash Algorithm 1','Secure Hash Algorithm 1 - el algoritmo que Git usa para identificar commits de forma única','Software History Archive 1','Source Hash Application 1'], r:1, e:'SHA-1 (Secure Hash Algorithm 1) es el algoritmo que Git usa para generar identificadores únicos de 40 caracteres hexadecimales para cada commit.' },

]; // fin BANCO

// ═══════════════════════════════════════════════
// ESTADO DE LA APLICACIÓN
// ═══════════════════════════════════════════════
let temasSeleccionados = ['todos'];
let preguntasActuales = [];
let indicePregunta = 0;
let correctas = 0;
let respuestas = []; // null = sin responder, true = correcta, false = incorrecta
let ultimaEleccion = [];
let modoRepetir = false;

// Init
document.getElementById('total-preguntas-badge').textContent = BANCO.length;
configurarBotonesTema();

function configurarBotonesTema() {
  document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const tema = this.dataset.tema;
      if (tema === 'todos') {
        temasSeleccionados = ['todos'];
        document.querySelectorAll('.tema-btn').forEach(b => b.classList.remove('activo'));
        this.classList.add('activo');
      } else {
        const idxTodos = document.querySelector('.tema-btn[data-tema="todos"]');
        idxTodos.classList.remove('activo');
        if (temasSeleccionados.includes('todos')) {
          temasSeleccionados = [];
        }
        if (this.classList.contains('activo')) {
          this.classList.remove('activo');
          temasSeleccionados = temasSeleccionados.filter(t => t !== tema);
          if (temasSeleccionados.length === 0) {
            temasSeleccionados = ['todos'];
            idxTodos.classList.add('activo');
          }
        } else {
          this.classList.add('activo');
          temasSeleccionados.push(tema);
        }
      }
    });
  });
}

function iniciarCuestionario() {
  modoRepetir = false;
  const numDeseado = parseInt(document.getElementById('num-preguntas').value);

  // Filtrar por tema
  let pool;
  if (temasSeleccionados.includes('todos')) {
    pool = [...BANCO];
  } else {
    pool = BANCO.filter(q => temasSeleccionados.includes(q.tema));
  }

  // Mezclar
  pool = mezclar(pool);

  // Coger las N preguntas, asegurando variedad si se repite tema
  preguntasActuales = pool.slice(0, Math.min(numDeseado, pool.length));

  // Mezclar el orden de opciones para cada pregunta (mantener traza de respuesta correcta)
  preguntasActuales = preguntasActuales.map(q => {
    const indices = [0,1,2,3];
    const mezclados = mezclar(indices);
    const nuevasOps = mezclados.map(i => q.ops[i]);
    const nuevaR = mezclados.indexOf(q.r);
    return { ...q, ops: nuevasOps, r: nuevaR };
  });

  respuestas = new Array(preguntasActuales.length).fill(null);
  ultimaEleccion = new Array(preguntasActuales.length).fill(null);
  indicePregunta = 0;
  correctas = 0;

  document.getElementById('panel-configuracion').style.display = 'none';
  document.getElementById('barra-progreso').style.display = 'flex';
  document.getElementById('zona-quiz').style.display = 'block';
  document.getElementById('zona-resultados').style.display = 'none';
  document.getElementById('score-live').textContent = '0';

  mostrarPregunta();
}

function repetirMismos() {
  // Reordenar solo, mismas preguntas
  respuestas = new Array(preguntasActuales.length).fill(null);
  ultimaEleccion = new Array(preguntasActuales.length).fill(null);
  indicePregunta = 0;
  correctas = 0;
  preguntasActuales = mezclar(preguntasActuales);

  document.getElementById('zona-resultados').style.display = 'none';
  document.getElementById('zona-quiz').style.display = 'block';
  document.getElementById('barra-progreso').style.display = 'flex';
  document.getElementById('score-live').textContent = '0';

  mostrarPregunta();
}

function volverConfig() {
  document.getElementById('zona-resultados').style.display = 'none';
  document.getElementById('zona-quiz').style.display = 'none';
  document.getElementById('barra-progreso').style.display = 'none';
  document.getElementById('panel-configuracion').style.display = 'block';
}

function mostrarPregunta() {
  const q = preguntasActuales[indicePregunta];
  const total = preguntasActuales.length;
  const pct = ((indicePregunta) / total * 100).toFixed(0);

  document.getElementById('progreso-texto').textContent = `PREGUNTA ${indicePregunta+1}/${total}`;
  document.getElementById('progreso-fill').style.width = pct + '%';
  document.getElementById('pregunta-num-txt').textContent = `PREGUNTA ${indicePregunta+1} DE ${total}`;
  document.getElementById('pregunta-tema-txt').textContent = q.tema;
  document.getElementById('pregunta-texto').textContent = q.p;

  const listaEl = document.getElementById('opciones-lista');
  listaEl.innerHTML = '';

  const letras = ['A','B','C','D'];
  q.ops.forEach((op, i) => {
    const item = document.createElement('div');
    item.className = 'opcion-item';
    item.innerHTML = `<span class="opcion-letra">${letras[i]}</span><span class="opcion-texto">${op}</span>`;

    // Si ya respondió esta pregunta
    if (respuestas[indicePregunta] !== null) {
      item.classList.add('bloqueada');
      if (i === q.r) item.classList.add('correcta');
      else if (i === ultimaEleccion[indicePregunta]) item.classList.add('incorrecta');
    } else {
      item.addEventListener('click', () => responder(i));
    }
    listaEl.appendChild(item);
  });

  // Feedback
  const fb = document.getElementById('feedback-msg');
  const fbe = document.getElementById('feedback-explicacion');
  if (respuestas[indicePregunta] === true) {
    fb.className = 'feedback-msg correcto';
    fb.innerHTML = '✓ CORRECTO';
    fb.style.display = 'flex';
    fbe.textContent = q.e;
    fbe.style.display = 'block';
  } else if (respuestas[indicePregunta] === false) {
    fb.className = 'feedback-msg incorrecto';
    fb.innerHTML = `✗ INCORRECTO — Respuesta correcta: ${letras[q.r]}`;
    fb.style.display = 'flex';
    fbe.textContent = q.e;
    fbe.style.display = 'block';
  } else {
    fb.style.display = 'none';
    fbe.style.display = 'none';
  }

  // Nav
  document.getElementById('btn-anterior').disabled = indicePregunta === 0;
  const btnSig = document.getElementById('btn-siguiente');
  if (indicePregunta === total - 1) {
    btnSig.textContent = 'VER RESULTADO ▶';
    btnSig.disabled = false;
  } else {
    btnSig.textContent = 'SIGUIENTE ▶';
    btnSig.disabled = respuestas[indicePregunta] === null;
  }
}

function responder(opcion) {
  if (respuestas[indicePregunta] !== null) return;
  const q = preguntasActuales[indicePregunta];
  ultimaEleccion[indicePregunta] = opcion;

  if (opcion === q.r) {
    respuestas[indicePregunta] = true;
    correctas++;
    document.getElementById('score-live').textContent = correctas;
  } else {
    respuestas[indicePregunta] = false;
  }

  mostrarPregunta();
}

function irSiguiente() {
  if (indicePregunta === preguntasActuales.length - 1) {
    mostrarResultados();
  } else {
    indicePregunta++;
    mostrarPregunta();
  }
}

function irAnterior() {
  if (indicePregunta > 0) {
    indicePregunta--;
    mostrarPregunta();
  }
}

function mostrarResultados() {
  document.getElementById('zona-quiz').style.display = 'none';
  document.getElementById('barra-progreso').style.display = 'none';
  document.getElementById('zona-resultados').style.display = 'block';

  const total = preguntasActuales.length;
  const sinResp = respuestas.filter(r => r === null).length;
  const incorrectas = total - correctas - sinResp;
  const pct = (correctas / total) * 100;
  const nota = ((correctas / total) * 10).toFixed(1);

  document.getElementById('res-nota').textContent = nota;
  document.getElementById('res-fraction').textContent = `${correctas} DE ${total} CORRECTAS`;
  document.getElementById('res-correctas').textContent = correctas;
  document.getElementById('res-incorrectas').textContent = incorrectas;
  document.getElementById('res-sin-resp').textContent = sinResp;

  const barraEl = document.getElementById('res-barra-fill');
  setTimeout(() => { barraEl.style.width = pct + '%'; }, 100);

  const notaNum = parseFloat(nota);
  let calColor, calText, barColor;
  if (notaNum >= 9) { calColor = '#4CAF50'; calText = 'SOBRESALIENTE'; barColor = '#4CAF50'; }
  else if (notaNum >= 7) { calColor = '#8BC34A'; calText = 'NOTABLE'; barColor = '#8BC34A'; }
  else if (notaNum >= 5) { calColor = '#FFD700'; calText = 'APROBADO'; barColor = '#FFD700'; }
  else { calColor = '#CC0000'; calText = 'SUSPENSO'; barColor = '#CC0000'; }

  document.getElementById('res-nota').style.color = calColor;
  document.getElementById('res-calificacion').textContent = calText;
  document.getElementById('res-calificacion').style.color = calColor;
  document.getElementById('res-calificacion').style.borderColor = calColor;
  barraEl.style.background = barColor;
}

function mezclar(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
