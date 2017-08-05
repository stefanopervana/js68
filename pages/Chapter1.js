import Layout from '../components/layout'

export default () => (
  <Layout title='Chapter 1'>
    <div>
     <style jsx>{`.col-md-6 {border-radius: 4px; overflow: hidden; box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9); display: block; min-height: 70%; font-family: Verdana; max-width: 1100px; background-color: #CEDDF1; margin: auto; margin-top: auto; margin-right: auto; margin-bottom: auto; margin-left: auto; white-space: pre-wrap; border: none; box-sizing: border-box; color: #2D0D0D; line-height: 1.1; padding: 4.7em} .home {margin: 1.5em 0;} h1 {color: #867452; font-size: 60px;} h2 {color: #867452; font-size: 40px} h3 {color: #867452; font-size: 30px} .it, .listit {color: brown; font-size: 24px; font-style: italic; letter-spacing: 0.04em; } .p, .listitem {color: #75AFAD; font-size: 24px; font-style: italic; letter-spacing: 0.04em;} pre {display: block; font-family: monospace; white-space: pre; margin: 1em 0; font-size: 16px} code{margin: auto; font-family:"Lucida Console"; "Andale Mono"; "Courier New"; Courier; monospace; font-style:normal; color:#395C73;} code strong {color:#000; background:#F5FD11; padding:1px; font-weight:normal;} .interno {font-family: verdana; font-style: italic; color: #395C73; font-size: 24px;} .sub{text-decoration: underline;} .im {color: #04445c;} .re {color: #650669;} .sub{text-decoration: underline; } blockquote {color: #111AD5; font-size: 24px; font-style: italic; letter-spacing: 0.04em;} .note { padding:3px; background: orange; margin-top: 1em; margin-bottom: 1em; margin-left: 40px; margin-right: 40px;}`}</style>

    <div className="col-md-6"> 
<p className="chapter">1</p>
<h1>Accustoming Yourself to JavaScript</h1>
<p className="it">JavaScript fue diseñado para sentirse familiar. Con la sintaxis que recuerda a Java y las construcciones comunes a muchos lenguajes de secuencias de comandos (como funciones, matrices, diccionarios y expresiones regulares), JavaScript parece ser un aprendizaje rápido para cualquier persona con poca experiencia en programación. Y para los programadores principiantes, es posible comenzar a escribir programas con relativamente poca capacitación gracias al pequeño número de conceptos básicos en el lenguaje.</p>
<p className="p">JavaScript was designed to feel familiar. With syntax reminiscent of Java and constructs common to many scripting languages (such as functions, arrays, dictionaries, and regular expressions), JavaScript seems like a quick learn to anyone with a little programming experi- ence. And for novice programmers, it’s possible to get started writing programs with relatively little training thanks to the small number of core concepts in the language.</p>
<p className="it">Tan accesible como lo es JavaScript, dominar el lenguaje requiere más tiempo y requiere una comprensión más profunda de su semántica, sus idiosincrasias y sus modismos más efectivos. Cada capítulo de este libro cubre un área temática diferente del JavaScript efectivo. Este primer capítulo comienza con algunos de los temas más fundamentales.</p>
<p className="p">As approachable as JavaScript is, mastering the language takes more time, and requires a deeper understanding of its semantics, its idio- syncrasies, and its most effective idioms. Each chapter of this book covers a different thematic area of effective JavaScript. This first chapter begins with some of the most fundamental topics.</p>
<h2>Item 1: Know Which JavaScript You Are Using</h2>
<p className="it">Como la mayoría de las tecnologías exitosas, JavaScript ha evolucionado con el tiempo. Originalmente comercializado como complemento de Java para la programación de páginas web interactivas, JavaScript eventualmente sustituyó a Java como el lenguaje de programación dominante de la web. La popularidad de JavaScript llevó a su formalización en 1997 como un estándar internacional, conocido oficialmente como ECMAScript. Hoy en día hay muchas implementaciones competidoras de JavaScript que proporcionan conformidad a varias versiones del estándar ECMA-Script.</p>
<p className="p">Like most successful technologies, JavaScript has evolved over time. Originally marketed as a complement to Java for programming inter- active web pages, JavaScript eventually supplanted Java as the web’s dominant programming language. JavaScript’s popularity led to its formalization in 1997 as an international standard, known officially as ECMAScript. Today there are many competing implementations of JavaScript providing conformance to various versions of the ECMA- Script standard.</p>
<p className="it">La tercera edición de la norma ECMAScript (comúnmente conocida como ES3), que se finalizó en 1999, sigue siendo la versión más ampliamente adoptada de JavaScript. El siguiente avance importante al estándar fue la Edición 5, o ES5, que fue lanzado en 2009. ES5 introdujo una serie de nuevas características, así como la normalización de algunas características ampliamente apoyadas, pero anteriormente no especificadas. Debido a que el soporte de ES5 no es todavía omnipresente, señalaré a lo largo de este libro siempre que un ítem o consejo específico sea específico de ES5.</p>
<p className="p">The third edition of the ECMAScript standard (commonly referred    to as ES3), which was finalized in 1999, continues to be the most widely adopted version of JavaScript. The next major advancement to the standard was Edition 5, or ES5, which was released in 2009. ES5 introduced a number of new features as well as standardizing some widely supported but previously unspecified features. Because ES5 support is not yet ubiquitous, I will point out throughout this book whenever a particular Item or piece of advice is specific to ES5.</p>
<p className="it">Además de varias ediciones del estándar, hay una serie de características no estándar que son compatibles con algunas implementaciones de JavaScript, pero no con otras. Por ejemplo, muchos motores JavaScript admiten una palabra clave <code>const</code> para definir variables, sin embargo, el estándar ECMAScript no proporciona ninguna definición para la sintaxis o el comportamiento de const. Además, el comportamiento de <code>const</code> difiere de la implementación a la implementación. En algunos casos, las variables <code>const</code> no pueden actualizarse:</p>
<p className="p">In addition to multiple editions of the standard, there are a number of nonstandard features that are supported by some JavaScript imple- mentations but not others. For example, many JavaScript engines support a <code>const</code> keyword for defining variables, yet the ECMAScript standard does not provide any definition for the syntax or behavior  of const. Moreover, the behavior of <code>const</code> differs from implementation to implementation. In some cases, <code>const</code> variables are prevented from being updated:</p>
<pre><code>
const PI = <span className="v">3.141592653589793</span>;<br></br>
PI = <span className="g">modified!"</span>;<br></br>
PI; // 3.141592653589793
</code></pre>
<p className="it">Otras implementaciones simplemente tratan a <code>const</code> como sinónimo de <code>var</code>:</p>
<p className="p">Other implementations simply treat <code>const</code> as a synonym for <code>var</code>:</p>
<pre><code>
const PI = <span className="v">3.141592653589793</span>;<br></br>
PI = <span className="g">modified!"</span>; PI; // "modified!"<br></br>
</code></pre>
<p className="it">Dada la larga historia de JavaScript y la diversidad de implementaciones, puede resultar difícil realizar un seguimiento de las funciones disponibles en cada plataforma. El problema es que el ecosistema primario de JavaScript -el navegador web- no permite a los programadores controlar qué versión de JavaScript está disponible para ejecutar su código. Dado que los usuarios finales pueden utilizar diferentes versiones de diferentes navegadores web, los programas web deben escribirse cuidadosamente para que funcionen de forma consistente en todos los navegadores.</p>
<p className="p">Given JavaScript’s long history and diversity of implementations, it can be difficult to keep track of which features are available on which platform. Compounding this problem is the fact that JavaScript’s pri- mary ecosystem—the web browser—does not give programmers con- trol over which version of JavaScript is available to execute their code. Since end users may use different versions of different web browsers, web programs have to be written carefully to work consistently across all browsers.</p>
<p className="it">Por otro lado, JavaScript no se utiliza exclusivamente para la programación web de cliente. Otros usos incluyen programas del lado del servidor, extensiones del navegador y secuencias de comandos para aplicaciones móviles y de escritorio. En algunos de estos casos, puede tener una versión mucho más específica de JavaScript disponible para usted. Para estos casos, tiene sentido aprovechar las características adicionales específicas de la implementación particular de JavaScript de la plataforma.</p>
<p className="p">On the other hand, JavaScript is not exclusively used for client-side web programming. Other uses include server-side programs, browser extensions, and scripting for mobile and desktop applications. In some of these cases, you may have a much more specific version of JavaScript available to you. For these cases, it makes sense to take advantage of additional features specific to the platform’s particular implementation of JavaScript.</p>
<p className="it">Este libro se ocupa principalmente de las características estándar de Java-Script. Pero también es importante discutir ciertas características ampliamente apoyadas pero no estándar. Cuando se trata de estándares más recientes o características no estándar, es crítico entender si sus aplicaciones se ejecutarán en entornos que soporten esas características. De lo contrario, es posible que se encuentre en situaciones en las que sus aplicaciones funcionen según lo previsto en su propia computadora o en la infraestructura de prueba, pero fallan al implementarlas en usuarios que ejecutan su aplicación en diferentes entornos. Por ejemplo, <code>const</code> puede funcionar bien cuando se prueba en un motor que admita la característica no estándar pero falla con un error de sintaxis cuando se implementa en un navegador web que no reconoce la palabra clave.</p>
<p className="p">This book is concerned primarily with standard features of Java- Script. But it is also important to discuss certain widely supported but nonstandard features. When dealing with newer standards or nonstandard features, it is critical to understand whether your appli- cations will run in environments that support those features. Oth- erwise, you may find yourself in situations where your applications work as intended on your own computer or testing infrastructure, but fail when you deploy them to users running your application in differ- ent environments. For example, <code>const</code> may work fine when tested on an engine that supports the nonstandard feature but then fail with a syntax error when deployed in a web browser that does not recognize the keyword.</p>
<p className="it">ES5 introdujo otra consideración de control de versiones con su modo estricto. Esta característica le permite optar por una versión restringida de JavaScript que no permite algunas de las características más problemáticas o propensas a errores del lenguaje completo. La sintaxis fue diseñada para ser compatible con versiones anteriores de modo que los entornos que no implementan las comprobaciones de modo estricto todavía pueden ejecutar código estricto. El modo estricto está habilitado en un programa agregando una constante de cadena especial al principio del programa:</p>
<p className="p">ES5 introduced another versioning consideration with its strict mode. This feature allows you to opt in to a restricted version of JavaScript that disallows some of the more problematic or error-prone features of the full language. The syntax was designed to be backward- compatible so that environments that do not implement the strict- mode checks can still execute strict code. Strict mode is enabled in a program by adding a special string constant at the very beginning of the program:</p>
<pre><code>
<span className="g">"use strict"</span>;
</code></pre>
<p className="it">Del mismo modo, puede habilitar el modo estricto en una función colocando la directiva al principio del cuerpo de la función:</p>
<p className="p">Similarly, you can enable strict mode in a function by placing the directive at the beginning of the function body:</p>
<pre><code>
function f(x) &#123; <span className="g">"use strict"</span>;<br></br>
/ / ...<br></br>
&#125;<br></br>
</code></pre>
<p className="it">El uso de una cadena literal para la sintaxis de la directiva parece un poco extraño, pero tiene el beneficio de la compatibilidad con versiones anteriores: La evaluación de una cadena literal no tiene efectos secundarios, por lo que un motor ES3 ejecuta la directiva como una declaración inofensiva. Luego descarta su valor inmediatamente. Esto hace posible escribir código en modo estricto que se ejecuta en motores JavaScript antiguos, pero con una limitación crucial: Los motores antiguos no realizarán ninguna de las comprobaciones del modo estricto. Si no prueba en un entorno ES5, es demasiado fácil escribir código que se rechazará cuando se ejecute en un entorno ES5:</p>
<p className="p">The use of a string literal for the directive syntax looks a little strange, but it has the benefit of backward compatibility: Evaluating a string literal has no side effects, so an ES3 engine executes the directive as an innocuous statement—it evaluates the string and then discards its value immediately. This makes it possible to write code in strict mode that runs in older JavaScript engines, but with a crucial lim- itation: The old engines will not perform any of the checks of strict mode. If you don’t test in an ES5 environment, it’s all too easy to write code that will be rejected when run in an ES5 environment:</p>
<pre><code>
function f(x) &#123; <span className="g">"use strict"</span>;<br></br>
var arguments = []; <span className="r">// error: redefinition of arguments</span><br></br>
// ...<br></br>
&#125;<br></br>
</code></pre>
<p className="it">La redefinición de la variable argumentos no se permite en modo estricto, pero un entorno que no implementa las comprobaciones de modo estricto aceptará este código. Al implementar este código en producción, el programa fallaría en entornos que implementan ES5. Por esta razón siempre debe probar código estricto en entornos ES5 totalmente compatibles.</p>
<p className="p">Redefining the arguments variable is disallowed in strict mode, but  an environment that does not implement  the  strict-mode  checks will accept this code. Deploying this code in production would then cause the program to fail in environments that implement ES5. For this reason you should always test strict code in fully compliant ES5 environments.</p>
<p className="it">Uno de los fallos del uso del modo estricto es que la directiva <span classname="g">"use strict"</span> sólo se reconoce en la parte superior de un script o función, lo que hace que sea sensible a la concatenación de scripts, donde las aplicaciones grandes se desarrollan en archivos separados que luego se combinan en un Archivo único para desplegar en la producción. Considere un archivo que espera estar en modo estricto:</p>
<p className="p">One pitfall of using strict mode is that the <span className="g">"use strict"</span> directive is only recognized at the top of a script or function, which makes it sen- sitive to script concatenation, where large applications are developed in separate files that are then combined into a single file for deploying in production. Consider one file that expects to be in strict mode:</p>
<pre><code>
// file1.js "use strict"; function f() &#123;<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
</code></pre>
<p className="it">Y otro archivo que no espera estar en modo estricto:</p>
<p className="p">and another file that expects not to be in strict mode:</p>
<pre><code>// file2.js<br></br>
// no strict-mode directive<br></br>
function g() &#123;<br></br>
var arguments = [];<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
</code></pre>
<p className="it">¿Cómo podemos concatenar estos dos archivos correctamente? Si empezamos con</p>
<p className="p">How can we concatenate these two files correctly? If we start with</p>
<p className="it"><code>file1.js</code>, Entonces todo el archivo combinado está en modo estricto:</p>
<p className="p"><code>file1.js</code>, then the whole combined file is in strict mode:</p>
<pre><code>
// file1.js "use strict"; function f() &#123;<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
// file2.js<br></br>
// no strict-mode directive<br></br>
function f() &#123;<br></br>
var arguments = []; <span className="r">// error: redefinition of arguments</span>xxxx<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
</code></pre>
<p className="it">Y si empezamos con <code>file2.js</code>, entonces ninguno de los archivos combinados está en modo estricto:</p>
<p className="p">And if we start with <code>file2.js</code>, then none of the combined file is in strict mode:</p>
<pre><code>
// file2.js<br></br>
// no strict-mode directive<br></br>
function g() &#123;<br></br>
var arguments = [];<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
// file1.js<br></br>
"use strict";<br></br>
function f() &#123; <span className="r">// no longer strict</span><br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
</code></pre>
<p className="it">En sus propios proyectos, podría adherirse a una política de "modo estricto únicamente" o "no estrictamente en modo solamente", pero si desea escribir código robusto que se puede combinar con una amplia variedad de código, tiene unos pocos alternativas.</p>
<p className="p">In your own projects, you could stick to a “strict-mode only” or “non- strict-mode only” policy, but if you want to write robust code that can be combined with a wide variety of code, you have a few alternatives.</p>
<p className="it">Nunca concatenar archivos estrictos y archivos no restringidos. Esta es probablemente la solución más fácil, pero por supuesto restringe la cantidad de control que tiene sobre la estructura de archivos de su aplicación o biblioteca. En el mejor de los casos, tiene que desplegar dos archivos separados, uno que contiene todos los archivos estrictos y otro que contiene los archivos no estrictos.</p>
<p className="p">Never concatenate strict files and nonstrict files. This is probably the easiest solution, but it of course restricts the amount of control you have over the file structure of your application or library. At best, you have to deploy two separate files, one containing all the strict files and one containing the nonstrict files.</p>
<p className="it">Concatenar archivos envolviendo sus cuerpos en expresiones de función inmediatamente invocadas. El punto 13 proporciona una explicación en profundidad de las expresiones de función inmediatamente invocadas (IIFEs), pero en resumen, al envolver el contenido de cada archivo en una función, se pueden interpretar independientemente en diferentes modos. La versión concatenada del ejemplo anterior se vería así:</p>
<p className="p">Concatenate files by wrapping their bodies in immediately invoked function expressions. Item 13 provides an in-depth explanation of immediately invoked function expressions (IIFEs), but in short, by wrapping each file’s contents in a function, they can be independently interpreted in different modes. The concatenated version of the above example would look like this:</p>
<pre><code>
// no strict-mode directive<br></br>
(function() &#123;<br></br>
// file1.js "use strict"; function f() &#123;<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
&#125;)();<br></br>
(function() &#123;<br></br>
// file2.js<br></br>
// no strict-mode directive<br></br>
function f() &#123;<br></br>
var arguments = [];<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
&#125;)();<br></br>
</code></pre>
<p className="it">Dado que el contenido de cada archivo se coloca en un ámbito separado, la directiva de modo estricto (o la falta de uno) sólo afecta al contenido de ese archivo. Sin embargo, para que este enfoque funcione, el contenido de los archivos no puede suponer que se interpreten a nivel global. Por ejemplo, las declaraciones <code>var</code> y function no persisten como variables globales (vea el ítem 8 para más información sobre globales). Esto sucede con los sistemas de módulos populares, que administran archivos y dependencias al colocar automáticamente el contenido de cada módulo en una función aparte. Dado que los archivos se colocan en ámbitos locales, cada archivo puede tomar su propia decisión sobre si se debe utilizar el modo estricto.</p>
<p className="p">Since each file’s contents are placed in a separate scope, the strict- mode directive (or lack of one) only affects that file’s contents. For this approach to work, however, the contents of files cannot assume that they are interpreted at global scope. For example, <code>var</code> and function declarations do not persist as global variables (see Item 8 for more on globals). This happens to be the case with popular module systems, which manage files and dependencies by automatically placing each module’s contents in a separate function. Since files are all placed in local scopes, each file can make its own decision about whether to use strict mode.</p>
<p className="it">Escriba sus archivos para que se comporten igual en cualquiera de los dos modos. Para escribir una biblioteca que funcione en tantos contextos como sea posible, no puede asumir que se colocará dentro del contenido de una función mediante una herramienta de concatenación de secuencias de comandos ni puede suponer si la base de código del cliente será estricta o no estricta. La forma más sencilla de estructurar su código para obtener la máxima compatibilidad es escribiendo para el modo estricto pero envolviendo explícitamente el contenido de todo su código en funciones que habilitan el modo estricto localmente. Esto es similar a la solución anterior, ya que envuelve el contenido de cada archivo en un IIFE, pero en este caso escribes el IIFE a mano en lugar de confiar en la herramienta de concatenación o el sistema de módulos para hacerlo por ti y explícitamente opta por el estricto modo:</p>
<p className="p">Write your files so that they behave the same in either mode. To write  a library that works in as many contexts as possible, you cannot assume that it will be placed inside the contents of a function by a script concatenation tool, nor can you assume whether the client codebase will be strict or nonstrict. The simplest way to structure your code for maximum compatibility is to write for strict mode but explicitly wrap the contents of all your code in functions that enable strict mode locally. This is similar to the previous solution, in that you wrap each file’s contents in an IIFE, but in this case you write the IIFE by hand instead of trusting the concatenation tool or module system to do it for you, and explicitly opt in to strict mode:</p>
<pre><code>
(function() &#123;<br></br>
"use strict";<br></br>
function f() &#123;<br></br>
// ...<br></br>
&#125;<br></br>
// ...<br></br>
&#125;)();
</code></pre>
<p className="it">Observe que este código se trata como estricto independientemente de si está concatenado en un contexto estricto o no estricto. Por el contrario, una función que no opta por el modo estricto seguirá siendo tratada como estricta si se concatena después de código estricto. Así que la opción más universalmente compatible es escribir en modo estricto.</p>
<p className="p">Notice that this code is treated as strict regardless of whether it is concatenated in a strict or nonstrict context. By contrast, a function that does not  opt in to strict mode will still be treated as strict if it   is concatenated after strict code. So the more universally compatible option is to write in strict mode.</p>

<h3>Things to Remember</h3>
<p className="it">✦ Decida qué versiones de JavaScript admite su aplicación.</p>
<p className="p">✦	Decide which versions of JavaScript your application supports.</p>
<p className="it">✦ Asegúrese de que las funciones JavaScript que utilice estén soportadas por todos los entornos en los que se ejecute la aplicación.</p>
<p className="p">✦	Be sure that any JavaScript features you use are supported by all environments where your application runs.</p>
<p className="it">✦ Siempre pruebe un código estricto en entornos que realicen las comprobaciones en modo estricto.</p>
<p className="p">✦	Always test strict code in environments that perform the strict- mode checks.</p>
<p className="it">✦ Tenga cuidado de concatenar scripts que difieran en sus expectativas sobre el modo estricto.</p>
<p className="p">✦	Beware of concatenating scripts that differ in their expectations about strict mode.</p>

<h3>Item 2: Understand JavaScript’s Floating-Point Numbers</h3>
<p className="it">La mayoría de los lenguajes de programación tienen varios tipos de datos numéricos, pero JavaScript se salva con uno solo. Puede ver esto reflejado en el comportamiento del operador typeof, que clasifica números enteros y números de punto flotante igual como números:</p>
<p className="p">Most programming languages have several types of numeric data, but JavaScript gets away with just one. You can see this reflected in the behavior of the typeof operator, which classifies integers and float- ing-point numbers alike simply as numbers:</p>
<pre><code>
typeof 17; // "number" typeof 98.6; // "number" typeof -2.1; // "number"
</code></pre>
<p className="it">De hecho, todos los números en JavaScript son números de coma flotante de doble precisión, es decir, la codificación de 64 bits de los números especificados por el estándar IEEE 754, comúnmente conocido como "dobles". Si este hecho te deja preguntarte qué pasó con el Enteros, tenga en cuenta que los dobles pueden representar enteros perfectamente con hasta 53 bits de precisión. Todos los números enteros de -9.007.199.254.740.992 (-253) a 9.007.199.254.740.992 (253) son dobles válidos. Así que es perfectamente posible hacer aritmética entera en JavaScript, a pesar de la falta de un tipo entero distinto.</p>
<p className="p">In fact, all numbers in JavaScript are double-precision floating-point numbers, that is, the 64-bit encoding of numbers specified by the IEEE 754 standard—commonly known as “doubles.” If this fact  leaves you wondering what happened to the integers, keep in mind that doubles can represent integers perfectly with up to 53 bits of precision. All of the integers from –9,007,199,254,740,992 (–253) to 9,007,199,254,740,992 (253) are valid doubles. So it’s perfectly pos- sible to do integer arithmetic in JavaScript, despite the lack of a dis- tinct integer type.</p>
<p className="it">La mayoría de los operadores aritméticos trabajan con enteros, números reales o una combinación de los dos:</p>
<p className="p">Most arithmetic operators work with integers, real numbers, or a combination of the two:</p>
<pre><code>
0.1	1.9	//	0.19<br></br>
-99 + 100;	//	1<br></br>
21 - 12.3;	//	8.7<br></br>
2.5 / 5;	//	0.5<br></br>
21 % 8;	//	5
</code></pre>
<p className="it">Los operadores aritméticos bit a bit, sin embargo, son especiales. En lugar de operar en sus argumentos directamente como números de coma flotante, los convierten implícitamente en enteros de 32 bits. (Para ser exactos, se tratan como números enteros de complemento de 32 bits, big-endian). Por ejemplo, tome la expresión OR bit a bit:</p>
<p className="p">The bitwise arithmetic operators, however, are special. Rather than operating on their arguments directly as floating-point numbers, they implicitly convert them to 32-bit integers. (To be precise, they are treated as 32-bit, big-endian, two’s complement integers.) For example, take the bitwise OR expression:</p>
<pre><code>
8 | 1; // 9
</code></pre>
<p className="it">Esta expresión sencilla requiere de varios pasos para evaluar. Como siempre, los números de JavaScript 8 y 1 son dobles. Pero también pueden representarse como números enteros de 32 bits, es decir, secuencias de treinta y dos 1's y 0's. Como un entero de 32 bits, el número 8 se ve así:</p>
<p className="p">This simple-looking expression actually requires several steps to eval- uate. As always, the JavaScript numbers 8 and 1 are doubles. But they can also be represented as 32-bit integers, that is, sequences of thirty-two 1’s and 0’s. As a 32-bit integer, the number 8 looks like this:</p>
<pre><code>
00000000000000000000000000001000
</code></pre>
<p className="it">Puede ver esto por sí mismo utilizando el método toString de números:</p>
<p className="p">You can see this for yourself by using the toString method of numbers:</p>
<pre><code>(8).toString(2); // "1000"
</code></pre>
<p className="it">El argumento toString especifica la raíz, en este caso indicando una representación de base 2 (es decir, binaria). El resultado deja caer los 0 bits adicionales a la izquierda, ya que no afectan al valor.</p>
<p className="p">The argument to toString specifies the radix, in this case indicating  a base 2 (i.e., binary) representation. The result drops the extra 0 bits on the left since they don’t affect the value.</p>
<p className="it">El entero 1 se representa en 32 bits como:</p>
<p className="p">The integer 1 is represented in 32 bits as:</p>
<pre><code>
00000000000000000000000000000001
</code></pre>
<p className="it">La expresión OR binaria combina las dos secuencias de bits manteniendo los 1 bits encontrados en cualquiera de las entradas, lo que da como resultado el patrón de bits:</p>
<p className="p">The bitwise OR expression combines the two bit sequences by keeping any 1 bits found in either input, resulting in the bit pattern:</p>
<pre><code>
00000000000000000000000000001001
</code></pre>
<p className="it">Esta secuencia representa el entero 9. Puede verificar esto utilizando la función de biblioteca estándar parseInt, de nuevo con una raíz de 2:</p>
<p className="p">This sequence represents the integer 9. You can verify this by using the standard library function parseInt, again with a radix of 2:</p>
<pre><code>
parseInt("1001", 2); // 9
</code></pre>
<p className="it">(Los primeros 0 bits son innecesarios ya que, de nuevo, no afectan al resultado.)</p>
<p className="p">(The leading 0 bits are unnecessary since, again, they don’t affect the result.)</p>
<p className="it">Todos los operadores bit a bit funcionan de la misma manera, convirtiendo sus entradas en números enteros y realizando sus operaciones en los patrones de bits enteros antes de convertir los resultados en números de coma flotante Java-Script estándar. En general, estas conversiones requieren trabajo adicional en los motores de JavaScript: Dado que los números se almacenan como punto flotante, tienen que convertirse en enteros y volver a punto flotante de nuevo. Sin embargo, la optimización de los compiladores a veces puede inferir cuando las expresiones aritméticas e incluso las variables trabajan exclusivamente con números enteros, y evitar las conversiones adicionales al almacenar los datos internamente como números enteros.</p>
<p className="p">All of the bitwise operators work the same way, converting their inputs to integers and performing their operations on the integer    bit patterns before converting the results back to standard Java- Script floating-point numbers. In general, these conversions require extra work in JavaScript engines: Since numbers are stored as floating-point, they have to be converted to integers and then back to floating-point again. However, optimizing compilers can sometimes infer when arithmetic expressions and even variables work exclu- sively with integers, and avoid the extra conversions by storing the data internally as integers.</p>
<p className="it">Una nota final de precaución sobre los números de punto flotante: Si no te hacen al menos un poco nervioso, probablemente debería. Los números de punto flotante parecen engañosamente familiares, pero son notoriamente inexactos. Incluso algunos de los aritmética de aspecto más simple pueden producir resultados inexactos:</p>
<p className="p">A final note of caution about floating-point numbers: If they don’t make you at least a little nervous, they probably should. Float- ing-point numbers look deceptively familiar, but they are notoriously inaccurate. Even some of the simplest-looking arithmetic can produce inaccurate results:</p>
<pre><code>
0.1 + 0.2; // 0.30000000000000004
</code></pre>
<p className="it">Mientras que 64 bits de precisión es razonablemente grande, los dobles todavía sólo pueden representar un conjunto finito de números, en lugar del conjunto infinito de números reales. La aritmética de punto flotante sólo puede producir resultados aproximados, redondeando al número real representable más cercano. Cuando se realiza una secuencia de cálculos, estos errores de redondeo pueden acumularse, dando lugar a resultados cada vez menos precisos. El redondeo también causa sorprendentes desviaciones del tipo de propiedades que normalmente esperamos de la aritmética. Por ejemplo, los números reales son asociativos, lo que significa que para cualquier número real x, yyz, siempre es el caso que (x + y) + z = x + (y + z).</p>
<p className="p">While 64 bits of precision is reasonably large, doubles can still only represent a finite set of numbers, rather than the infinite set of real numbers. Floating-point arithmetic can only produce approximate results, rounding to the nearest representable real number. When you perform a sequence of calculations, these rounding errors can accumulate, leading to less and less accurate results. Rounding also causes surprising deviations from the kind of properties we usu-   ally expect of arithmetic. For example, real numbers are associative, meaning that for any real numbers x, y, and z, it’s always the case that (x + y) + z = x + (y + z).</p>
<p className="it">Pero esto no siempre es cierto en los números de coma flotante:</p>
<p className="p">But this is not always true of floating-point numbers:</p>
<pre><code>
(0.1 + 0.2) + 0.3; // 0.6000000000000001<br></br>
0.1 + (0.2 + 0.3); // 0.6
</code></pre>
<p className="it">Los números de punto flotante ofrecen un equilibrio entre precisión y rendimiento. Cuando la exactitud importa, es crítico ser consciente de sus limitaciones. Una solución útil es trabajar con valores enteros siempre que sea posible, ya que pueden representarse sin redondeo. Al hacer cálculos con dinero, los programadores a menudo escalan los números hasta trabajar con la denominación más pequeña de la moneda para que puedan calcular con números enteros. Por ejemplo, si el cálculo anterior se medía en dólares, podríamos trabajar con números enteros de centavos:</p>
<p className="p">Floating-point numbers offer a trade-off between accuracy and per- formance. When accuracy matters, it’s critical to be aware of their limitations. One useful workaround is to work with integer values wherever possible, since they can be represented without rounding. When doing calculations with money, programmers often scale num- bers up to work with the currency’s smallest denomination so that they can compute with whole numbers. For example, if the above cal- culation were measured in dollars, we could work with whole num- bers of cents instead:</p>
<pre><code>
<p className="it">(10 + 20) + 30; // 60</p>
<p className="p">(10 + 20) + 30; // 60</p>
<p className="it">10 + (20 + 30); // 60</p>
<p className="p">10 + (20 + 30); // 60</p>
</code></pre>
<p className="it">Con enteros, usted todavía tiene que tener cuidado de que todos los cálculos encajan dentro del rango entre -253 y 253, pero no tiene que preocuparse de errores de redondeo.</p>
<p className="p">With integers, you still have to take care that all calculations fit within the range between –253 and 253, but you don’t have to worry about rounding errors.</p>

<h3>Things to Remember</h3>
<p className="it">✦ Los números JavaScript son números de coma flotante de doble precisión.</p>
<p className="p">✦	JavaScript numbers are double-precision floating-point numbers.</p>
<p className="it">✦ Los enteros en JavaScript son sólo un subconjunto de dobles en lugar de un tipo de datos separado.</p>
<p className="p">✦	Integers in JavaScript are just a subset of doubles rather than a separate datatype.</p>
<p className="it">✦ Los operadores de bits tratan los números como si fueran números enteros de 32 bits.</p>
<p className="p">✦	Bitwise operators treat numbers as if they were 32-bit signed integers.</p>
<p className="it">✦ Sea consciente de las limitaciones de las precisiones en la aritmética de coma flotante.</p>
<p className="p">✦	Be aware of limitations of precisions in floating-point arithmetic.</p>

<h3>Item 3: Beware of Implicit Coercions</h3>
<p className="it">JavaScript puede ser sorprendentemente perdonar cuando se trata de errores de tipo. Muchos idiomas consideran una expresión como</p>
<p className="p">JavaScript can be surprisingly forgiving when it comes to type errors. Many languages consider an expression like</p>
<pre><code>
3 + true; // 4
</code></pre>
<p className="it">Para ser un error, porque las expresiones booleanas como true son incompatibles con la aritmética. En un lenguaje escrito de forma estática, un programa con tal expresión ni siquiera se le permitiría correr. En algunos lenguajes de tipo dinámico, mientras que el programa se ejecuta, una expresión tal arrojaría una excepción. JavaScript no sólo permite que el programa funcione, sino que felizmente produce el resultado 4!</p>
<p className="p">to be an error, because boolean expressions such as true are incom- patible with arithmetic. In a statically typed language, a program with such an expression would not even be allowed to run. In some dynamically typed languages, while the program would run, such an expression would throw an exception. JavaScript not only allows the program to run, but it happily produces the result 4!</p>
<p className="it">Hay un puñado de casos en JavaScript donde proporcionar el tipo incorrecto produce un error inmediato, como llamar a una no función o intentar seleccionar una propiedad de null:</p>
<p className="p">There are a handful of cases in JavaScript where providing the wrong type produces an immediate error, such as calling a nonfunction or attempting to select a property of null:</p>
<pre><code>
<p className="it">"hello"(1); // error: not a function</p>
<p className="p">"hello"(1); // error: not a function</p>
<p className="it">null.x;	// error: cannot read property 'x' of null</p>
<p className="p">null.x;	// error: cannot read property 'x' of null</p>
</code></pre>
<p className="it">Pero en muchos otros casos, en lugar de generar un error, JavaScript coacciona un valor al tipo esperado siguiendo varios protocolos de conversión automática. Por ejemplo, los operadores aritméticos -,, /, y% todos intentan convertir sus argumentos en números antes de hacer su cálculo. El operador + es más sutil, porque está sobrecargado para realizar una adición numérica o una concatenación de cadenas, dependiendo de los tipos de sus argumentos:</p>
<p className="p">But in many other cases, rather than raising an error, JavaScript coerces a value to the expected type by following various automatic conversion protocols. For example, the arithmetic operators -, , /, and % all attempt to convert their arguments to numbers before doing their calculation. The operator + is subtler, because it is overloaded to perform either numeric addition or string concatenation, depending on the types of its arguments:</p>
<pre><code>
<p className="it">2 + 3;	// 5</p>
<p className="p">2 + 3;	// 5</p>
<p className="it">"hello" + " world"; // "hello world"</p>
<p className="p">"hello" + " world"; // "hello world"</p>
</code></pre>
<p className="it">Ahora, ¿qué sucede cuando se combina un número y una cadena? Java-Script rompe el vínculo a favor de las cadenas, convirtiendo el número en una cadena:</p>
<p className="p">Now, what happens when you combine a number and a string? Java- Script breaks the tie in favor of strings, converting the number to a string:</p>
<pre><code>
<p className="it">"2" + 3; // "23"</p>
<p className="p">"2" + 3; // "23"</p>
<p className="it">2 + "3"; // "23"</p>
<p className="p">2 + "3"; // "23"</p>
</code></pre>
<p className="it">Mezclar tipos como este a veces puede ser confuso, especialmente porque es sensible al orden de las operaciones. Tome la expresión:</p>
<p className="p">Mixing types like this can sometimes be confusing, especially because it’s sensitive to the order of operations. Take the expression:</p>
<pre><code>
1 + 2 + "3";	// "33"
</code></pre>
<p className="it">Dado que los grupos de adición a la izquierda (es decir, es asociativo a la izquierda), esto es lo mismo que:</p>
<p className="p">Since addition groups to the left (i.e., is left-associative), this is the same as:</p>
<pre><code>
<p className="it">(1 + 2) + "3";	// "33"</p>
<p className="p">(1 + 2) + "3";	// "33"</p>
<p className="it">By contrast, the expression</p>
<p className="p">By contrast, the expression</p>
<p className="it">1 + "2" + 3;	// "123"</p>
<p className="p">1 + "2" + 3;	// "123"</p>
</code></pre>
<p className="it">Se evalúa a la cadena "123" -de nuevo, la asociatividad a la izquierda dicta que la expresión es equivalente a envolver la adición de la izquierda entre paréntesis:</p>
<p className="p">evaluates to the string "123"—again, left-associativity dictates that the expression is equivalent to wrapping the left-hand addition in parentheses:</p>
<pre><code>
(1 + "2") + 3;	// "123"
</code></pre>
<p className="it">Las operaciones bit a bit no sólo se convierten a números sino al subconjunto de números que pueden ser representados como números enteros de 32 bits, como se discute en el ítem 2. Estos incluyen los operadores aritméticos bit a bit (~, &amp;, ^, and</p>
	<p className="p">The bitwise operations not only convert to numbers but to the subset of numbers that can be represented as 32-bit integers, as discussed in Item 2. These include the bitwise arithmetic operators (~, &, ^, and</p>
<p className="it">|) Y los operadores de cambio (&lt;&lt;, &gt;&gt;, y &gt;&gt;&gt;).</p>
<p className="p">|) and the shift operators (&#60;&#60;, &#62;&#62;, and &#62;&#62;&#62;).</p>
<p className="it">Estas coerciones pueden ser seductoramente convenientes -por ejemplo, para convertir automáticamente cadenas que provienen de la entrada del usuario, un archivo de texto o un flujo de red:</p>
<p className="p">These coercions can be seductively convenient—for example, for auto- matically converting strings that come from user input, a text file, or a network stream:</p>
<pre><code>
"17"	3;	// 51<br></br>
"8" | "1"; // 9<br></br>
</code></pre>
<p className="it">Pero las coerciones también pueden ocultar errores. Una variable que resulta ser nula no fallará en un cálculo aritmético, pero silenciosamente convertir a 0; Una variable indefinida se convertirá en el valor de punto flotante especial NaN (paradójicamente llamado "no un número" número-culpar el estándar IEEE punto flotante!). En vez de lanzar inmediatamente una excepción, estas coerciones hacen que el cálculo continúe con resultados a menudo confusos e impredecibles. Frustrantemente, es particularmente difícil incluso para probar el valor NaN, por dos razones. En primer lugar, JavaScript sigue el requisito de rayado de la cabeza del estándar de punto flotante IEEE de que NaN sea tratado como desigual a sí mismo. Así que probar si un valor es igual a NaN no funciona en absoluto:</p>
<p className="p">But coercions can also hide errors. A variable that turns out to be null will not fail in an arithmetic  calculation,  but  silently  convert to 0; an undefined variable will convert to the special floating-point value NaN (the paradoxically named “not a number” number—blame the IEEE floating-point standard!). Rather than immediately throw- ing an exception, these coercions cause the calculation to continue with often confusing and unpredictable results. Frustratingly, it’s particularly difficult even to test for the NaN value, for two reasons. First, JavaScript follows the IEEE floating-point standard’s head- scratching requirement that NaN be treated as unequal to itself. So testing whether a value is equal to NaN doesn’t work at all:</p>
<pre><code>var x = NaN;<br></br>
x === NaN;	// false
</code></pre>
<p className="it">Además, la función estándar de la librería NNA no es muy fiable porque viene con su propia coacción implícita, convirtiendo su argumento en un número antes de probar el valor. (Un nombre más exacto para isNaN probablemente habría sido coercementToNaN.) Si ya sabe que un valor es un número, puede probarlo para NaN con isNaN:</p>
<p className="p">Moreover, the standard isNaN library function is not very reliable because it comes with its own implicit coercion, converting its argu- ment to a number before testing the value. (A more accurate name for isNaN probably would have been coercesToNaN.) If you already know that a value is a number, you can test it for NaN with isNaN:</p>
<p className="it">IsNaN (NaN); // cierto</p>
<p className="p">isNaN(NaN); // true</p>
<p className="it">Pero otros valores que definitivamente no son NaN, sin embargo son coercibles a NaN, son indistinguibles a isNaN:</p>
<p className="p">But other values that are definitely not NaN, yet are nevertheless coercible to NaN, are indistinguishable to isNaN:</p>
<pre><code>
isNaN("foo");	// true<br></br>
isNaN(undefined);          // true<br></br>
isNaN(&#123;&#125;);	// true<br></br>
isNaN(&#123; valueOf: "foo" &#125;); // true
</code></pre>
<p className="it">Afortunadamente, hay un idioma que es confiable y conciso -si es algo que no es intuitivo- para las pruebas de NaN. Puesto que NaN es el único valor de JavaScript que se trata como desigual a sí mismo, siempre se puede probar si un valor es NaN comprobando su igualdad:</p>
<p className="p">Luckily there’s an idiom that is both reliable and concise—if some- what unintuitive—for testing for NaN. Since NaN is the only JavaScript value that is treated as unequal to itself, you can always test if a value is NaN by checking it for equality to itself:</p>
<pre><code>
var a = NaN;<br></br>
a	!== a;	// true<br></br>
var b = "foo";<br></br>
b	!== b;	// false<br></br>
var c = undefined;<br></br>
c	!== c;	// false<br></br>
var d = &#123;&#125;;<br></br>
d	!== d;	// false<br></br>
var e = &#123; valueOf: "foo" &#125;;<br></br>
e	!== e;	// false
</code></pre>
<p className="it">También puede abstraer este patrón en una función de utilidad claramente nombrada:</p>
<p className="p">You can also abstract this pattern into a clearly named utility function:</p>
<pre><code>
function isReallyNaN(x) &#123;<br></br>
return x !== x;<br></br>
&#125;
</code></pre>
<p className="it">Sin embargo, probar un valor para la desigualdad a sí mismo es tan conciso que se utiliza generalmente sin una función auxiliar, por lo que es importante reconocer y comprender.</p>
<p className="p">But testing a value for inequality to itself is so concise that it’s com- monly used without a helper function, so it’s important to recognize and understand.</p>
<p className="it">Las coerciones silenciosas pueden hacer que la depuración de un programa roto resulte particularmente frustrante, ya que cubren los errores y los hacen más difíciles de diagnosticar. Cuando un cálculo va mal, el mejor enfoque para depurar es inspeccionar los resultados intermedios de un cálculo, trabajando hasta el último punto antes de que las cosas salieran mal. Desde allí, puede inspeccionar los argumentos de cada operación, buscando argumentos del tipo incorrecto. Dependiendo del error, podría ser un error lógico, como usar el operador aritmético equivocado, o un error de tipo, como pasar el valor indefinido en lugar de un número.</p>
<p className="p">Silent coercions can make debugging a broken program particularly frustrating, since they cover up errors and make them harder to diag- nose. When a calculation goes wrong, the best approach to debugging is to inspect the intermediate results of a calculation, working back to the last point before things went wrong. From there, you can inspect the arguments of each operation, looking for arguments of the wrong type. Depending on the bug, it could be a logical error, such as using the wrong arithmetic operator, or a type error, such as passing the undefined value instead of a number.</p>
<p className="it">Los objetos también pueden ser coaccionados a primitivos. Esto es más comúnmente utilizado para convertir a cadenas:</p>
<p className="p">Objects can also be coerced to primitives. This is most commonly used for converting to strings:</p>
<pre><code>
"the Math object: " + Math; // "the Math object: [object Math]"<br></br>
"the JSON object: " + JSON; // "the JSON object: [object JSON]"
</code></pre>
<p className="it">Los objetos se convierten en cadenas llamando implícitamente a su toString</p>
<p className="p">Objects are converted to strings by implicitly calling their toString</p>
<p className="it">método. Puede probar esto llamándolo usted mismo:</p>
<p className="p">method. You can test this out by calling it yourself:</p>
<pre><code>
Math.toString(); // "[object Math]"<br></br>
JSON.toString(); // "[object JSON]"
</code></pre>
<p className="it">Del mismo modo, los objetos pueden convertirse a números a través de su método valueOf. Puede controlar la conversión de tipo de objetos mediante la definición de estos métodos:</p>
<p className="p">Similarly, objects can be converted to numbers via their valueOf method. You can control the type conversion of objects by defining these methods:</p>
<pre><code>
"J" + &#123; toString: function() &#123; return "S"; &#125; &#125;; // "JS"<br></br>
2	&#123; valueOf: function() &#123; return 3; &#125; &#125;;	// 6
</code></pre>
<p className="it">Una vez más, las cosas se complican cuando se considera que + está sobrecargado para realizar la concatenación y la adición de cadenas. Específicamente, cuando un objeto contiene un método toString y un método valueOf, no es obvio qué método + debe llamar: Se supone que debe elegir entre concatenación y adición basados ​​en tipos, pero con coacción implícita, ¡los tipos no se dan realmente! JavaScript resuelve esta ambigüedad eligiendo ciegamente valueOf sobre toString. Pero esto significa que si alguien tiene la intención de realizar una concatenación de cadena con un objeto, puede comportarse inesperadamente:</p>
<p className="p">Once again, things get tricky when you consider that + is overloaded to perform both string concatenation and addition. Specifically, when an object contains both a toString and a valueOf method, it’s not obvious which method + should call: It’s supposed to choose between concatenation and addition based on types, but with implicit coer- cion, the types are not actually given! JavaScript resolves this ambi- guity by blindly choosing valueOf over toString. But this means that if someone intends to perform a string concatenation with an object, it can behave unexpectedly:</p>
<pre><code>
var obj = &#123;<br></br>
toString: function() &#123;<br></br>
return "[object MyObject]";<br></br>
&#125;,<br></br>
valueOf: function() &#123;<br></br>
return 17;<br></br>
&#125;<br></br>
&#125;;<br></br>
"object: " + obj; // "object: 17"
</code></pre>
<p className="it">La moraleja de esta historia es que valueOf realmente sólo fue diseñado para ser usado para objetos que representan valores numéricos como objetos Number. Para estos objetos, los métodos toString y valueOf devuelven resultados consistentes -una representación de cadena o representación numérica del mismo número- por lo que el + sobrecargado siempre se comporta de forma consistente independientemente de si el objeto se utiliza para concatenación o adición. En general, la coerción a las cuerdas es mucho más común y útil que la coerción a los números. Es mejor evitar valueOf a menos que su objeto sea realmente una abstracción numérica y obj.toString () produce una representación de cadena de obj.valueOf ().</p>
<p className="p">The moral of this story is that valueOf was really only designed to   be used for objects that represent numeric values such as Number objects. For these objects, the toString and valueOf methods return consistent results—a string representation or numeric representation of the same number—so the overloaded + always behaves consistently regardless of whether the object is used for concatenation or addi- tion. In general, coercion to strings is far more common and useful than coercion to numbers. It’s best to avoid valueOf unless your object really is a numeric abstraction and obj.toString() produces a string representation of obj.valueOf().</p>
<p className="it">El último tipo de coerción se conoce a veces como veracidad. Operadores como if, ||, y &amp;&amp; trabajan lógicamente con valores booleanos, pero aceptan valores. Los valores JavaScript se interpretan como valores boolianos según una simple coacción implícita. La mayoría de los valores JavaScript son verdaderos, es decir, implícitamente coaccionados a true. Esto incluye todos los objetos -a diferencia de la cadena y la coerción numérica- la veracidad no implica invocar implícitamente ningún método de coerción. Existen exactamente siete valores falsos: falso, 0, -0, "", NaN, nulo y no definido. Todos los demás valores son verídicos. Dado que los números y las cadenas pueden ser falsos, no siempre es seguro usar veracidad para comprobar si un argumento de función o una propiedad de objeto está definido. Considere una función que toma argumentos opcionales con valores predeterminados:</p>
<p className="p">The last kind of coercion is sometimes known as truthiness. Oper- ators such as if, ||, and && logically work with boolean values, but actually accept any values. JavaScript values are interpreted as bool- ean values according to a simple implicit coercion. Most JavaScript values are truthy,  that is, implicitly coerced to true.  This includes  all objects—unlike string and number coercion, truthiness does not involve implicitly invoking any coercion methods. There are exactly seven falsy values: false, 0, -0, "", NaN, null, and undefined. All other values are truthy. Since numbers and strings can be falsy, it’s not always safe to use truthiness to check whether a function argument or object property is defined. Consider a function that takes optional arguments with default values:</p>
<pre><code>
function point(x, y) &#123;<br></br>
if (!x) &#123;<br></br>
x = 320;<br></br>
&#125;<br></br>
if (!y) &#123;<br></br>
y = 240;<br></br>
&#125;<br></br>
return &#123; x: x, y: y &#125;;<br></br>
&#125;
</code></pre>
<p className="it">Esta función ignora cualquier argumento falsy, que incluye 0:</p>
<p className="p">This function ignores any falsy arguments, which includes 0:</p>
<pre><code>
point(0, 0); // &#123; x: 320, y: 240 &#125;
</code></pre>
<p className="it">La forma más precisa de comprobar la indefinición es usar typeof:</p>
<p className="p">The more precise way to check for undefined is to use typeof:</p>
<pre><code>
function point(x, y) &#123;<br></br>
if (typeof x === "undefined") &#123; x = 320;<br></br>
&#125;<br></br>
if (typeof y === "undefined") &#123; y = 240;<br></br>
&#125;<br></br>
return &#123; x: x, y: y &#125;;<br></br>
&#125;
</code></pre>
<p className="it">Esta versión del punto distingue correctamente entre 0 y indefinido:</p>
<p className="p">This version of point correctly distinguishes between 0 and undefined:</p>
<pre><code>
point();	// &#123; x: 320, y: 240 &#125;<br></br>
point(0, 0); // &#123; x: 0, y: 0 &#125;
</code></pre>
<p className="it">Otro enfoque es comparar a indefinido:</p>
<p className="p">Another approach is to compare to undefined:</p>
<pre><code>
if (x === undefined) &#123; ... &#125;
</code></pre>
<p className="it">El tema 54 discute las implicaciones de las pruebas de veracidad para el diseño de bibliotecas y API.</p>
<p className="p">Item 54 discusses the implications of truthiness testing for library and API design.</p>
<h3>Things to Remember</h3>
<p className="it">✦ Los errores de tipo pueden ocultarse silenciosamente mediante coerciones implícitas.</p>
<p className="p">✦	Type errors can be silently hidden by implicit coercions.</p>
<p className="it">✦ El operador + está sobrecargado para hacer la adición o la concatenación de cadenas en función de sus tipos de argumentos.</p>
<p className="p">✦	The + operator is overloaded to do addition or string concatenation depending on its argument types.</p>
<p className="it">✦ Los objetos se coaccionan a los números a través de valueOf ya strings mediante</p>
<p className="p">✦	Objects are coerced to numbers via valueOf and to strings via</p>
<p className="it">Encadenar.</p>
<p className="p">toString.</p>
<p className="it">✦ Los objetos con métodos valueOf deben implementar un método toString que proporcione una representación de cadena del número producido por valueOf.</p>
<p className="p">✦	Objects with valueOf methods should implement a toString method that provides a string representation of the number produced by valueOf.</p>
<p className="it">✦ Utilice typeof o comparación a indefinido en lugar de truthiness para probar valores indefinidos.</p>
<p className="p">✦	Use typeof or comparison to undefined rather than truthiness to test for undefined values.</p>
<h3>Item 4: Prefer Primitives to Object Wrappers</h3>
<p className="it">Además de los objetos, JavaScript tiene cinco tipos de valores primitivos: booleanos, números, cadenas, nulo y no definido. (Confusamente, el operador typeof informa el tipo de null como "objeto", pero el estándar ECMA-Script lo describe como un tipo distinto.) Al mismo tiempo, la biblioteca estándar proporciona constructores para envolver booleanos, números y cadenas Como objetos. Puede crear un objeto String que envuelva un valor de cadena:</p>
<p className="p">In addition to objects, JavaScript has five types of primitive values: booleans, numbers, strings, null, and undefined. (Confusingly, the typeof operator reports the type of null as "object", but the ECMA- Script standard describes it as a distinct type.) At the same time, the standard library provides constructors for wrapping booleans, num- bers, and strings as objects. You can create a String object that wraps a string value:</p>
<pre><code>
var s = new String("hello");
</code></pre>
<p className="it">De alguna manera, un objeto String se comporta de forma similar al valor de cadena que envuelve. Puede concatenarlo con otros valores para crear cadenas:</p>
<p className="p">In some ways, a String object behaves similarly to the string value it wraps. You can concatenate it with other values to create strings:</p>
<pre><code>
s + " world"; // "hello world"
</code></pre>
<p className="it">Puede extraer sus subcadenas indexadas:</p>
<p className="p">You can extract its indexed substrings:</p>
<pre><code>
s[4]; // "o"
</code></pre>
<p className="it">Pero a diferencia de las cadenas primitivas, un objeto String es un objeto verdadero:</p>
<p className="p">But unlike primitive strings, a String object is a true object:</p>
<pre><code>
typeof "hello"; // "string"<br></br>
typeof s;       // "object"
</code></pre>
<p className="it">Esta es una diferencia importante, ya que significa que no se pueden comparar los contenidos de dos objetos String distintos utilizando operadores incorporados:</p>
<p className="p">This is an important difference, because it means that you can’t compare the contents of two distinct String objects using built-in operators:</p>
<pre><code>
var s1 = new String("hello"); <code>var</code> s2 = new String("hello"); s1 === s2; // false
</code></pre>
<p className="it">Puesto que cada objeto String es un objeto separado, sólo es igual a sí mismo. Lo mismo ocurre con el operador de igualdad no estricta:</p>
<p className="p">Since each String object is a separate object, it is only ever equal to itself. The same is true for the nonstrict equality operator:</p>
<pre><code>
s1 == s2; // false
</code></pre>
<p className="it">Dado que estos envoltorios no se comportan muy bien, no sirven mucho de un propósito. La principal justificación de su existencia son sus métodos de utilidad. JavaScript hace que sean cómodos de usar con otra coerción implícita: Puede extraer propiedades y métodos de llamada de un valor primitivo, y actúa como si hubiera envuelto el valor con su tipo de objeto correspondiente. Por ejemplo, el objeto String prototipo tiene un método toUpperCase, que convierte una cadena en mayúsculas. Puede utilizar este método en un valor de cadena primitiva:</p>
<p className="p">Since these wrappers don’t behave quite right, they don’t serve much of a purpose. The main justification for their existence is their util-  ity methods. JavaScript makes these convenient to use with another implicit coercion: You can extract properties and call methods of a primitive value, and it acts as though you had wrapped the value with its corresponding object type. For example, the String prototype object has a toUpperCase method, which converts a string to upper- case. You can use this method on a primitive string value:</p>
<pre><code>
"hello".toUpperCase(); // "HELLO"
</code></pre>
<p className="it">Una consecuencia extraña de este envolvimiento implícito es que se pueden establecer propiedades en valores primitivos sin efecto esencialmente:</p>
<p className="p">A strange consequence of this implicit wrapping is that you can set properties on primitive values with essentially no effect:</p>
<pre><code>
"hello".someProperty = 17; "hello".someProperty; // undefined
</code></pre>
<p className="it">Dado que la envolvente implícita produce un nuevo objeto String cada vez que se produce, la actualización del primer objeto de encapsulamiento no tiene efecto duradero. Realmente no tiene sentido establecer propiedades en valores primitivos, pero vale la pena ser consciente de este comportamiento. Resulta ser otra instancia en la que JavaScript puede ocultar errores de tipo: Si establece propiedades en lo que espera ser un objeto, pero utiliza un valor primitivo por error, su programa simplemente ignorará silenciosamente la actualización y continuará. Esto puede causar fácilmente que el error no se detecte y hacer más difícil de diagnosticar.</p>
<p className="p">Since the implicit wrapping produces a new String object each time it occurs, the update to the first wrapper object has no lasting effect. There’s really no point to setting properties on primitive values, but it’s worth being aware of this behavior. It turns out to be another instance of where JavaScript can hide type errors: If you set prop- erties on what you expect to be an object, but use a primitive value by mistake, your program will simply silently ignore the update and continue. This can easily cause the error to go undetected and make it harder to diagnose.</p>

<h3>Things to Remember</h3>
<p className="it">✦ Las envolturas de objetos para tipos primitivos no tienen el mismo comportamiento que sus valores primitivos cuando se comparan con la igualdad.</p>
<p className="p">✦	Object wrappers for primitive types do not have the same behavior as their primitive values when compared for equality.</p>
<p className="it">✦ Obtener y establecer propiedades en primitivas crea implícitamente wrappers de objetos.</p>
<p className="p">✦	Getting and setting properties on primitives implicitly creates object wrappers.</p>

<h3>Item 5: Avoid using <code>==</code> with Mixed Types What would you expect to be the value of this expression?</h3>
<pre><code>
"1.0e0" == &#123; valueOf: function() &#123; return true; &#125; &#125;;
</code></pre>
<p className="it">Estos dos valores aparentemente no relacionados son considerados equivalentes por el operador == porque, al igual que las coerciones implícitas descritas en el ítem 3, ambas son convertidas a números antes de ser comparadas. La cadena "1.0e0" se analiza como el número 1, y el objeto se convierte en un número llamando a su método valueOf y convirtiendo el resultado (true) en un número, que también produce 1.</p>
<p className="p">These two seemingly unrelated values are actually considered equiv- alent by the == operator because, like the implicit coercions described in Item 3, they are both converted to numbers before being compared. The string "1.0e0" parses as the number 1, and the object is con- verted to a number by calling its valueOf method and converting the result (true) to a number, which also produces 1.</p>
<p className="it">Es tentador usar estas coerciones para tareas como leer un campo de un formulario web y compararlo con un número:</p>
<p className="p">It’s tempting to use these coercions for tasks like reading a field from a web form and comparing it with a number:</p>
<pre><code>
var today = new Date();<br></br>
<br></br>
if (form.month.value == (today.getMonth() + 1) && form.day.value == <br></br>today.getDate()) &#123;<br></br>
// happy birthday!<br></br>
// ...<br></br>
&#125;
</code></pre>
<p className="it">Tema 5: Evitar el uso de == con tipos mixtos 17</p>
<p className="p">Item 5: Avoid using == with Mixed Types	17</p>
<p className="it">Pero en realidad es fácil convertir valores a números explícitamente usando el</p>
<p className="p">But it’s actually easy to convert values to numbers explicitly using the</p>
<p className="it">Función numérica o el operador unario +:</p>
<p className="p">Number function or the unary + operator:</p>
<pre><code>
var today = new Date();
<br></br>
if (+form.month.value == (today.getMonth() + 1) &&<br></br>
+form.day.value == today.getDate()) &#123;<br></br>
// happy birthday!<br></br>
// ...<br></br>
&#125;
</code></pre>
<p className="it">Esto es más claro, ya que transmite a los lectores de su código exactamente lo que se está aplicando la conversión, sin necesidad de memorizar las reglas de conversión. Una alternativa aún mejor es usar el operador de igualdad estricta:</p>
<p className="p">This is clearer, because it conveys to readers of your code exactly what conversion is being applied, without requiring them to memorize the conversion rules. An even better alternative is to use the strict equality operator:</p>
<pre><code>
var today = new Date();<br></br>
<br></br>
if (+form.month.value === (today.getMonth() + 1) && // strict<br></br>
+form.day.value === today.getDate()) &#123;	// strict<br></br>
// happy birthday!<br></br>
// ...<br></br>
&#125;
</code></pre>
<p className="it">Cuando los dos argumentos son del mismo tipo, no hay diferencia en el comportamiento entre == y ===. Así que si sabes que los argumentos son del mismo tipo, son intercambiables. Pero usar una igualdad estricta es una buena manera de dejar claro a los lectores que no hay conversión involucrada en la comparación. De lo contrario, requiere que los lectores recuerden las reglas exactas de coerción para descifrar el comportamiento de su código.</p>
<p className="p">When the two arguments are of the same type, there’s no difference in behavior between == and ===. So if you know that the arguments are of the same type, they are interchangeable. But using strict equality is a good way to make it clear to readers that there is no conversion involved in the comparison. Otherwise, you require readers to recall the exact coercion rules to decipher your code’s behavior.</p>
<p className="it">Como resulta, estas reglas de coacción no son nada obvias. La tabla 1.1 contiene las reglas de coacción para el operador == cuando sus argumentos son de tipos diferentes. Las reglas son simétricas: Por ejemplo, la primera regla se aplica tanto a null == undefined y undefined == null. La mayoría de las veces, las conversiones intentan producir números. Pero las reglas se vuelven sutiles cuando se ocupan de objetos. La operación intenta convertir un objeto en un valor primitivo llamando a su método valueOf y toString usando el primer valor primitivo que obtiene. Aún más sutilmente, los objetos Date intentan estos dos métodos en el orden opuesto.</p>
<p className="p">As it turns out, these coercion rules are not at all obvious. Table 1.1 contains the coercion rules for the == operator when its arguments are of different types. The rules are symmetric: For example, the first rule applies to both null == undefined and undefined == null. Most of the time, the conversions attempt to produce numbers. But the rules get subtle when they deal with objects. The operation tries to con- vert an object to a primitive value by calling its valueOf and toString methods, using the first primitive value it gets. Even more subtly, Date objects try these two methods in the opposite order.</p>
<p className="it">El operador == engañosamente aparece al papel sobre diferentes representaciones de datos. Este tipo de corrección de error se conoce a veces como "hacer lo que quiero decir" semántica. Pero las computadoras no pueden realmente leer tu mente. Hay demasiadas representaciones de datos en el mundo para JavaScript</p>
<p className="p">The == operator deceptively appears to paper over different representa- tions of data. This kind of error correction is sometimes known as “do what I mean” semantics. But computers cannot really read your mind. There are too many data representations in the world for JavaScript</p>
<p className="it">Tabla 1.1 Reglas de coacción para el Operador ==</p>
<p className="p">Table 1.1 Coercion Rules for the == Operator</p>
<p className="it"></p>
<p className="p"><div className="image"><a></a><img src="/static/001.png" width="100%" alt="Image"/></div></p>
<p className="it">Para saber cuál usted está utilizando. Por ejemplo, puede esperar que pueda comparar una cadena que contiene una fecha a un objeto Date:</p>
<p className="p">to know which one you are using. For example, you might hope that you could compare a string containing a date to a Date object:</p>
<pre><code>
var date = new Date("1999/12/31"); date == "1999/12/31"; // false
</code></pre>
<p className="it">Este ejemplo particular falla porque convertir un objeto Date a una cadena produce un formato diferente al que se utiliza en el ejemplo:</p>
<p className="p">This particular example fails because converting a Date object to a string produces a different format than the one used in the example:</p>
<pre><code>
date.toString(); // "Fri Dec 31 1999 00:00:00 GMT-0800 (PST)"
</code></pre>
<p className="it">Pero el error es sintomático de un malentendido más general de las coerciones. El operador == no infiere ni unifica formatos de datos arbitrarios. Requiere que usted y sus lectores comprendan sus reglas de coerción sutiles. Una mejor política es hacer las conversiones explícitas con la lógica de la aplicación personalizada y utilizar el operador de igualdad estricta:</p>
<p className="p">But the mistake is symptomatic of a more general misunderstanding of coercions. The == operator does not infer and unify arbitrary data formats. It requires both you and your readers to understand its sub- tle coercion rules. A better policy is to make the conversions explicit with custom application logic and use the strict equality operator:</p>
<pre><code>
function toYMD(date) &#123;<br></br>
var y = date.getYear() + 1900, // year is 1900-indexed<br></br>
m = date.getMonth() + 1,	// month is 0-indexed<br></br>
d = date.getDate();<br></br>
return y<br></br>
+ "/" + (m &#60; 10 ? "0" + m : m)<br></br>
+ "/" + (d &#60; 10 ? "0" + d : d);<br></br>
&#125;<br></br>
toYMD(date) === "1999/12/31"; // true
</code></pre>
<p className="it">Hacer conversiones explícitas asegura que no mezcle las reglas de coacción de ==, y mejor aún, alivia a sus lectores de tener que buscar las reglas de coacción o memorizarlas.</p>
<p className="p">Making conversions explicit ensures that you don’t mix up the coer- cion rules of ==, and—even better—relieves your readers from having to look up the coercion rules or memorize them.</p>
<h3>Things to Remember</h3>
<p className="it">✦ El <code>==</code> operador aplica un conjunto confuso de coerciones implícitas cuando sus argumentos son de tipos diferentes.</p>
<p className="p">✦	The <code>==</code> operator applies a confusing set of implicit coercions when its arguments are of different types.</p>
<p className="it">✦ Use <code>===</code> para dejar claro a sus lectores que su comparación no implica ninguna coerción implícita.</p>
<p className="p">✦	Use <code>===</code> to make it clear to your readers that your comparison does not involve any implicit coercions.</p>
<p className="it">✦ Use sus propias coerciones explícitas al comparar valores de diferentes tipos para hacer que el comportamiento de su programa sea más claro.</p>
<p className="p">✦	Use your own explicit coercions when comparing values of different types to make your program’s behavior clearer.</p>

<h3>Item 6: Learn the Limits of Semicolon Insertion</h3>
<p className="it">Una de las ventajas de JavaScript es la capacidad de dejar fuera de estado-terminación de punto y coma. Soltar semicolones resulta en una estética ligera:</p>
<p className="p">One of JavaScript’s conveniences is the ability to leave off state- ment-terminating semicolons. Dropping semicolons results in a pleas- antly lightweight aesthetic:</p>
<pre><code>
function Point(x, y) &#123; this.x = x || 0 this.y = y || 0<br></br>
&#125;<br></br>
<br></br>
Point.prototype.isOrigin = function() &#123;<br></br>
return this.x === 0 && this.y === 0<br></br>
&#125;
</code></pre>
<p className="it">Esto funciona gracias a la inserción automática de punto y coma, una técnica de análisis de programa que infiere los puntos y comas omitidos en ciertos contextos, efectivamente "insertando" el punto y coma en el programa automáticamente. El estándar ECMAScript especifica con precisión el mecanismo de inserción de punto y coma, por lo que los puntos y coma son portátiles entre los motores JavaScript.</p>
<p className="p">This works thanks to automatic semicolon insertion, a program pars- ing technique that infers omitted semicolons in certain contexts, effectively “inserting” the semicolon into the program for you auto- matically. The ECMAScript standard precisely specifies the semicolon insertion mechanism, so optional semicolons are portable between JavaScript engines.</p>
<p className="it">Pero similar a las coerciones implícitas de los ítems 3 y 5, la inserción del punto y coma tiene sus trampas, y usted simplemente no puede evitar el aprendizaje de sus reglas. Incluso si nunca omites los puntos y comas, existen restricciones adicionales en la sintaxis JavaScript que son consecuencias de la inserción de punto y coma. La buena noticia es que una vez que aprendas las reglas de la inserción del punto y coma, puede resultarle liberador dejar los puntos y comas innecesarios.</p>
<p className="p">But similar to the implicit coercions of Items 3 and 5, semicolon insertion has its pitfalls, and you simply can’t avoid learning its rules. Even if you never omit semicolons, there are additional restrictions in the JavaScript syntax that are consequences of semicolon insertion. The good news is that once you learn the rules of semicolon insertion, you may find it liberating to drop unnecessary semicolons.</p>
<p className="it">La primera regla de la inserción de punto y coma es:</p>
<p className="p">The first rule of semicolon insertion is:</p>
<p className="it">Los puntos y coma sólo se insertan antes de un token, después de una o varias líneas de nuevo, o al final de la entrada del programa.</p>
<p className="p">Semicolons are only ever inserted before a &#125; token, after one or more newlines, or at the end of the program input.</p>
<p className="it">En otras palabras, sólo puede dejar fuera de punto y coma al final de una línea, bloque o programa. Así que las siguientes son funciones legales:</p>
<p className="p">In other words, you can only leave out semicolons at the end of a line, block, or program. So the following are legal functions:</p>
<pre><code>
function square(x) &#123; <code>var</code> n = +x return n	n<br></br>
&#125;<br></br>
function area(r) &#123; r = +r; return Math.PI	r	r &#125;<br></br>
function add1(x) &#123; return x + 1 &#125;<br></br>
But this is not:<br></br>
function area(r) &#123; r = +r return Math.PI	r	r &#125; // error
</code></pre>
<p className="it">La segunda regla de inserción de punto y coma es:</p>
<p className="p">The second rule of semicolon insertion is:</p>
<p className="it">Los puntos y coma sólo se insertan cuando el siguiente token de entrada no puede ser analizado.</p>
<p className="p">Semicolons are only ever inserted when the next input token cannot be parsed.</p>
<p className="it">En otras palabras, la inserción de punto y coma es un mecanismo de corrección de errores. Como un ejemplo simple, este fragmento:</p>
<p className="p">In other words, semicolon insertion is an error correction mechanism. As a simple example, this snippet:</p>
<pre><code>
a = b (f());
</code></pre>
<p className="it">Parses muy bien como una sola declaración, equivalente a:</p>
<p className="p">parses just fine as a single statement, equivalent to:</p>
<pre><code>
a = b(f());
</code></pre>
<p className="it">Es decir, no se inserta punto y coma. Por el contrario, este fragmento:</p>
<p className="p">That is, no semicolon is inserted. By contrast, this snippet:</p>
<pre><code>
a = b f();
</code></pre>
<p className="it">Se analiza como dos declaraciones separadas, porque</p>
<p className="p">is parsed as two separate statements, because</p>
<pre><code>
a = b f();
</code></pre>
<p className="it">Es un error de análisis.</p>
<p className="p">is a parse error.</p>
<p className="it">Esta regla tiene una desafortunada implicación: Siempre hay que prestar atención al comienzo de la siguiente declaración para detectar si se puede omitir legalmente un punto y coma. No puede dejar el punto y coma de una sentencia si el token inicial de la siguiente línea puede interpretarse como una continuación de la sentencia.</p>
<p className="p">This rule has an unfortunate implication: You always have to pay attention to the start of the next statement to detect whether you can legally omit a semicolon. You can’t leave off a statement’s semicolon if the next line’s initial token could be interpreted as a continuation of the statement.</p>
<p className="it">Hay exactamente cinco personajes problemáticos a tener en cuenta: (, [, +, -, y / .. Cada uno de estos puede actuar como un operador de expresión o como el prefijo de una declaración, dependiendo del contexto. Si la siguiente línea comienza con cualquiera de los cinco caracteres problemáticos, no se insertará ningún punto y coma. De lejos, el escenario más común en el que esto ocurre es una sentencia que comienza con una expresión Paréntesis, como el ejemplo anterior Otro escenario común es un array literal:</p>
	<p className="p">There are exactly five problematic characters to watch out for: (, [, +, -, and /. Each one of these can act either as an expression operator or as the prefix of a statement, depending on the context. So watch out for statements that end with an expression, like the assignment statement above. If the next line starts with any of the five prob- lematic characters, no semicolon will be inserted. By far, the most common scenario where this occurs is a statement beginning with a parenthesis, like the example above. Another common scenario is an array literal:</p>
<pre><code>
a = b<br></br>
["r", "g", "b"].forEach(function(key) &#123; background[key] = foreground[key] / 2;<br></br>
&#125;);
</code></pre>
<p className="it">Esto se parece a dos sentencias: una asignación seguida por una sentencia que llama una función en las cadenas "r", "g" y "b" en orden. Pero como la sentencia comienza con [, se analiza como una sola afirmación, equivalente a:</p>
<p className="p">This looks like two statements: an assignment followed by a state- ment that calls a function on the strings "r", "g", and "b" in order. But because the statement begins with [, it parses as a single state- ment, equivalent to:</p>
<pre><code>
a = b["r", "g", "b"].forEach(function(key) &#123; background[key] = foreground[key] / 2;<br></br>
&#125;);
</code></pre>
<p className="it">Si la expresión entre corchetes parece extraña, recuerde que JavaScript permite expresiones separadas por comas, que se evalúan de izquierda a derecha y devuelven el valor de su última subexpresión: en este caso, la cadena "b".</p>
<p className="p">If that bracketed expression looks odd, remember that JavaScript allows comma-separated expressions, which evaluate from left to right and return the value of their last subexpression: in this case, the string "b".</p>
<p className="it">Los signos +, - y / se encuentran menos comúnmente al principio de las sentencias, pero no es inaudito. El caso de / es particularmente sutil: Al principio de un enunciado, en realidad no es un token completo sino el comienzo de un token de expresión regular:</p>
<p className="p">The +, -, and / tokens are less commonly found at the beginning of statements, but it’s not unheard of. The case of / is particularly sub- tle: At the start of a statement, it is actually not an entire token but the beginning of a regular expression token:</p>
<pre><code>
/Error/i.test(str) && fail();
</code></pre>
<p className="it">Esta sentencia prueba una cadena con la expresión regular insensible a mayúsculas / Error / i. Si se encuentra una coincidencia, la sentencia llama a la función de fallo. Pero si este código sigue una asignación no terminada:</p>
<p className="p">This statement tests a string with the case-insensitive regular expres- sion /Error/i. If a match is found, the statement calls the fail func- tion. But if this code follows an unterminated assignment:</p>
<pre><code>
a = b<br></br>
/Error/i.test(str) && fail();
</code></pre>
<p className="it">Entonces el código se analiza como una sola sentencia equivalente a:</p>
<p className="p">then the code parses as a single statement equivalent to:</p>
<pre><code>
a = b / Error / i.test(str) && fail();
</code></pre>
<p className="it">En otras palabras, el <code>/</code>token inicial se analiza como el operador de división!</p>
<p className="p">In other words, the initial <code>/</code> token parses as the division operator!</p>
<p className="it">Los programadores JavaScript experimentados aprenden a mirar la línea que sigue a una sentencia cada vez que quieren dejar fuera un punto y coma, para asegurarse de que la sentencia no será analizada incorrectamente. También tienen cuidado cuando refactorización. Por ejemplo, un programa perfectamente correcto con tres puntos y coma inferidos:</p>
<p className="p">Experienced JavaScript programmers learn to look at the line follow- ing a statement whenever they want to leave out a semicolon, to make sure the statement won’t be parsed incorrectly. They also take care when refactoring. For example, a perfectly correct program with three inferred semicolons:</p>
<pre><code>
a = b // semicolon inferred <code>var</code> x // semicolon inferred (f()) // semicolon inferred
</code></pre>
<p className="it">Puede cambiar inesperadamente a un programa diferente con sólo dos puntos y coma inferidos:</p>
<p className="p">can unexpectedly change to a different program with only two inferred semicolons:</p>
<pre><code>
var x	// semicolon inferred<br></br>
a = b	// no semicolon inferred<br></br>
(f())	// semicolon inferred
</code></pre>
<p className="it">Aunque debería ser equivalente a mover la instrucción <code>var</code> por una línea (vea el ítem 12 para obtener detalles sobre el alcance de la variable), el hecho de que b esté seguido de un paréntesis significa que el programa es mal evaluado como:</p>
<p className="p">Even though it should be equivalent to move the <code>var</code> statement up one line (see Item 12 for details of variable scope), the fact that b is followed by a parenthesis means that the program is mis-parsed as:</p>
<pre><code>
var x;<br></br>
a = b(f());
</code></pre>
<p className="it">El resultado es que siempre debe tener en cuenta los puntos y coma y omitir el inicio de la siguiente línea para los tokens que inhabilitan la inserción de punto y coma. Alternativamente, puede seguir una regla de siempre pre-fijación de los comentarios que comienzan con <code>(, [, +, -,</code>o <code>/</code>con un punto extra semicontónico. Por ejemplo, el ejemplo anterior se puede cambiar para proteger la llamada de función entre paréntesis:</p>
	<p className="p">The upshot is that you always need to be aware of omitted semicolons and check the beginning of the following line for tokens that disable semicolon insertion. Alternatively, you can follow a rule of always pre- fixing statements beginning with <code>(, [, +, -,</code> or <code>/</code> with an extra semi- colon. For example, the previous example can be changed to protect the parenthesized function call:</p>
<pre><code>
a = b	// semicolon inferred<br></br>
var x	// semicolon on next line<br></br>
;(f())	// semicolon inferred<br></br>
</code></pre>
<p className="it">Ahora es seguro mover la declaración <code>var</code> a la parte superior sin temor a cambiar el programa:</p>
<p className="p">Now it’s safe to move the <code>var</code> declaration to the top without fear of changing the program:</p>
<pre><code>
var x	// semicolon inferred<br></br>
a = b	// semicolon on next line<br></br>
;(f())	// semicolon inferred
</code></pre>
<p className="it">Otro escenario común en el que los puntos y comas ocultos pueden causar problemas es con la concatenación del script (véase el ítem 1). Cada archivo puede consistir en una expresión de llamada de función grande (vea el ítem 13 para más información acerca de las expresiones de función inmediatamente invocadas):</p>
<p className="p">Another common scenario where omitted semicolons can cause problems is with script concatenation (see Item 1). Each file might consist of a large function call expression (see Item 13 for more about imme- diately invoked function expressions):</p>
<pre><code>
// file1.js<br></br>
(function() &#123;<br></br>
// ...<br></br>
&#125;)()<br></br>
<br></br>
// file2.js<br></br>
(function() &#123;<br></br>
// ...<br></br>
&#125;)()<br></br>
</code></pre>
<p className="it">Cuando cada archivo se carga como un programa independiente, un punto y coma se inserta automáticamente al final, convirtiendo la llamada de función en una instrucción. Pero cuando los archivos están concatenados:</p>
<p className="p">When each file is loaded as a separate program, a semicolon is automatically inserted at the end, turning the function call into a statement. But when the files are concatenated:</p>
<pre><code>
(function() &#123;<br></br>
// ...<br></br>
&#125;)()<br></br>
(function() &#123;<br></br>
// ...<br></br>
&#125;)()
</code></pre>
<p className="it">El resultado se trata como una sola sentencia, equivalente a:</p>
<p className="p">the result is treated as one single statement, equivalent to:</p>
<pre><code>
(function() &#123;<br></br>
// ...<br></br>
&#125;)()(function() &#123;<br></br>
// ...<br></br>
&#125;)();
</code></pre>
<p className="it">El resultado: omitir un punto y coma de una sentencia requiere estar consciente no sólo del token siguiente en el archivo actual, sino de cualquier token que pueda seguir a la sentencia después de la concatenación del script. Similar al enfoque descrito anteriormente, puede proteger los scripts contra la concatenación descuidada prefijando defensivamente cada archivo con un punto extracomunitario extra, al menos si su primera declaración comienza con uno de los cinco caracteres vulnerables <code>(, [, +, -,</code>o <code>/</code>:</p>
	<p className="p">The upshot: Omitting a semicolon from a statement requires being aware of not only the next token in the current file, but any token that might follow the statement after script concatenation. Similar to the approach described above, you can protect scripts against careless concatenation by defensively prefixing every file with an extra semi- colon, at least if its first statement begins with one of the five vulnerable characters <code>(, [, +, -,</code> or <code>/</code>:</p>
<pre><code>
// file1.js<br></br>
;(function() &#123;<br></br>
// ...<br></br>
&#125;)()<br></br>
<br></br>
// file2.js<br></br>
;(function() &#123;<br></br>
// ...<br></br>
&#125;)()
</code></pre>
<p className="it">Esto asegura que incluso si el archivo anterior omite su punto y coma final, los resultados combinados seguirán siendo tratados como declaraciones separadas:</p>
<p className="p">This ensures that even if the preceding file omits its final semicolon, the combined results will still be treated as separate statements:</p>
<pre><code>
;(function() &#123;<br></br>
// ...<br></br>
&#125;)()<br></br>
;(function() &#123;<br></br>
// ...<br></br>
&#125;)()
</code></pre>
<p className="it">Por supuesto, es mejor si el proceso de concatenación de scripts agrega puntos y comas entre archivos automáticamente. Pero no todas las herramientas de concatenación están bien escritas, por lo que su apuesta más segura es agregar los puntos y coma defensivamente.</p>
<p className="p">Of course, it’s better if the script concatenation process adds extra semicolons between files automatically. But not all concatenation tools are well written, so your safest bet is to add semicolons defensively.</p>
<p className="it">En este punto, usted podría estar pensando: "Esto es demasiado para preocuparse. No es así: también hay casos en los que JavaScript insertará forzosamente un punto y coma aunque parezca que no hay error de análisis. Éstas son las llamadas producciones restringidas de la sintaxis de JavaScript, donde no se permite que ninguna nueva línea aparezca entre dos fichas. El caso más peligroso es la sentencia return, que no debe contener una nueva línea entre la palabra clave return y su argumento opcional. Así que la declaración:</p>
<p className="p">At this point, you might be thinking, “This is too much to worry about. I’ll just never omit semicolons and I’ll be fine.” Not so: There are also cases where JavaScript will forcibly insert a semicolon even though  it might appear that there is no parse error. These are the so-called restricted productions of the JavaScript syntax, where no newline is allowed to appear between two tokens. The most hazardous case is the return statement, which must not contain a newline between the return keyword and its optional argument. So the statement:</p>
<pre><code>
return &#123; &#125;;
</code></pre>
<p className="it">Devuelve un objeto nuevo, mientras que el fragmento de código:</p>
<p className="p">returns a new object, whereas the code snippet:</p>
<pre><code>
return<br></br>
&#123; &#125;;
</code></pre>
<p className="it">Analiza como tres estados separados, equivalente a:</p>
<p className="p">parses as three separate statements, equivalent to:</p>
<pre><code>
return;<br></br>
&#123; &#125;<br></br>
;
</code></pre>
<p className="it">En otras palabras, la nueva línea que sigue a la palabra clave return obliga a una inserción automática de punto y coma, que se analiza como una devolución sin argumento seguida de un bloque vacío y una sentencia vacía. Las otras producciones restringidas son</p>
<p className="p">In other words, the newline following the return keyword forces an automatic semicolon insertion, which parses as a return with no argument followed by an empty block and an empty statement. The other restricted productions are</p>
<p className="it">■ Una declaración de lanzamiento</p>
<p className="p">■	A throw statement</p>
<p className="it">■ Una instrucción break o continue con una etiqueta explícita</p>
<p className="p">■	A break or continue statement with an explicit label</p>
<p className="it">■ Un postfijo <code>++</code>u <code>--</code>operador</p>
<p className="p">■	A postfix <code>++</code> or <code>--</code> operator</p>
<p className="it">El propósito de la última regla es desambiguar fragmentos de código como los siguientes:</p>
<p className="p">The purpose of the last rule is to disambiguate code snippets such as the following:</p>
<pre><code>
a<br></br>
++<br></br>
b
</code></pre>
<p className="it">Ya que <code>++</code>puede servir como un prefijo o un sufijo, pero este último no puede ser precedido por una nueva línea, esto se analiza como:</p>
<p className="p">Since <code>++</code> can serve as either a prefix or a suffix, but the latter cannot be preceded by a newline, this parses as:</p>
<pre><code>
a; ++b;
</code></pre>
<p className="it">La tercera y última regla de inserción de punto y coma es:</p>
<p className="p">The third and final rule of semicolon insertion is:</p>
<p className="it">Los puntos y coma nunca se insertan como separadores en la cabecera de un bucle for o como sentencias vacías.</p>
<p className="p">Semicolons are never inserted as separators in the head of a for loop or as empty statements.</p>
<p className="it">Esto simplemente significa que siempre debe incluir explícitamente los puntos y coma en la cabeza de un bucle for. De lo contrario, la entrada como este:</p>
<p className="p">This simply means that you must always explicitly include the semicolons in a for loop’s head. Otherwise, input such as this:</p>
<pre><code>
for (var i = 0, total = 1 // parse error<br></br>
i &#60; n i++) &#123;<br></br>
total	= i<br></br>
&#125;
</code></pre>
<p className="it">Da lugar a un error de análisis. Del mismo modo, un bucle con un cuerpo vacío requiere un punto y coma explícito. De lo contrario, dejando el punto y coma da como resultado un error de análisis:</p>
<p className="p">results in a parse error. Similarly, a loop with an empty body requires an explicit semicolon. Otherwise, leaving off the semicolon results in a parse error:</p>
<pre><code>
function infiniteLoop() &#123; while (true) &#125; // parse error So this is one case where the semicolon is required: function infiniteLoop() &#123; while (true); &#125;
</code></pre>
<h3>Things to Remember</h3>
<p className="it">✦ Los puntos y coma son siempre inferidos antes de a}, al final de una línea, o al final de un programa.</p>
<p className="p">✦	Semicolons are only ever inferred before a &#125;, at the end of a line, or at the end of a program.</p>
<p className="it">✦ Los puntos y coma sólo se deducen cuando el siguiente token no puede ser analizado.</p>
<p className="p">✦	Semicolons are only ever inferred when the next token cannot be parsed.</p>
<p className="it">✦ Nunca omita un punto y coma antes de un enunciado que comience por <code>(, [, +, -,</code>o <code>/</code>.</p>
	<p className="p">✦	Never omit a semicolon before a statement beginning with <code>(, [, +, -,</code> or <code>/</code>.</p>
<p className="it">✦ Al concatenar scripts, inserte los puntos y comas entre scripts explícitamente.</p>
<p className="p">✦	When concatenating scripts, insert semicolons explicitly between scripts.</p>
<p className="it">✦ Nunca ponga una nueva línea antes del argumento para devolver, tirar, romper, continuar, ++ o -.</p>
<p className="p">✦	Never put a newline before the argument to return, throw, break, continue, ++, or --.</p>
<p className="it">✦ Los puntos y coma nunca se deducen como separadores en la cabeza de un</p>
<p className="p">✦	Semicolons are never inferred as separators in the head of a for</p>
<p className="it">Bucle o como instrucciones vacías.</p>
<p className="p">loop or as empty statements.</p>
<h3>Item 7: Think of Strings As Sequences of 16-Bit Code Units</h3>
<p className="it">Unicode tiene una reputación de ser complicado -a pesar de la ubicuidad de las cadenas, la mayoría de los programadores evitar aprender sobre Unicode y esperar lo mejor. Pero a nivel conceptual, no hay nada que temer. Los fundamentos de Unicode son perfectamente simples: a cada unidad de texto de todos los sistemas de escritura del mundo se le asigna un entero único entre</p>
<p className="p">Unicode has a reputation for being complicated—despite the ubiquity of strings, most programmers avoid learning about Unicode and hope for  the best. But at a conceptual level, there’s nothing to be afraid  of.  The basics of Unicode are perfectly simple: Every unit of text of  all the world’s writing systems is assigned a unique integer between</p>
<p className="it">0 y 1.114.111, conocido como un punto de código en terminología Unicode. Eso es todo, casi nada diferente de cualquier otra codificación de texto, como ASCII. La diferencia, sin embargo, es que mientras ASCII mapea cada índice a una representación binaria única, Unicode permite múltiples codificaciones binarias diferentes de puntos de código. Diferentes codificaciones hacen concesiones entre la cantidad de almacenamiento requerida para una cadena y la velocidad de las operaciones como la indexación en una cadena. Hoy en día hay múltiples codificaciones estándar de Unicode, las más populares de las cuales son UTF-8, UTF-16 y UTF-32.</p>
<p className="p">0 and 1,114,111, known as a code point in Unicode  terminology. That’s it—hardly any different from any other text encoding, such as ASCII. The difference, however, is that while ASCII maps each index to a unique binary representation, Unicode allows multiple different binary encodings of code points. Different encodings make trade-offs between the amount of storage required for a string and the speed of operations such as indexing into a string. Today there are multiple standard encodings of Unicode, the most popular of which are UTF-8, UTF-16, and UTF-32.</p>
<p className="it">Complicando la imagen más, los diseñadores de Unicode históricamente miscalculated su presupuesto para los puntos de código. Originalmente se pensaba que Unicode no necesitaría más de 216 puntos de código. Esto hizo que UCS-2, la codificación de 16 bits estándar original, sea una opción particularmente atractiva. Dado que cada punto de código podía encajar en un número de 16 bits, existía un simple mapeo uno a uno entre los puntos de código y los elementos de sus codificaciones, conocidos como unidades de código. Es decir, UCS-2 estaba formado por unidades de código de 16 bits individuales, cada una de las cuales correspondía a un único punto de código Unicode. El principal beneficio de esta codificación es que la indexación en una cadena es una operación barata y de tiempo constante: el acceso al n-ésimo punto de código de una cadena simplemente selecciona desde el elemento n-ésimo de 16 bits de la matriz. Figura 1. 1 muestra una cadena de ejemplo que consiste solamente en puntos de código en el rango original de 16 bits. Como puede ver, los índices coinciden perfectamente entre los elementos de la codificación y los puntos de código de la cadena Unicode.</p>
<p className="p">Complicating the picture further, the designers of Unicode historically miscalculated their budget for code points. It was originally thought that Unicode would need no more than 216 code points. This made UCS-2, the original standard 16-bit encoding, a particularly attrac- tive choice. Since every code point could fit in a 16-bit number, there was a simple, one-to-one mapping between code points and the ele- ments of their encodings, known as code units. That is, UCS-2 was made up of individual 16-bit code units, each of which corresponded to a single Unicode code point. The primary benefit of this encoding is that indexing into a string is a cheap, constant-time operation: Accessing the nth code point of a string simply selects from the nth 16-bit element of the array. Figure 1.1 shows an example string con- sisting only of code points in the original 16-bit range. As you can see, the indices match up perfectly between elements of the encoding and code points in the Unicode string.</p>
<p className="it">Como resultado, varias plataformas en ese momento se comprometieron a utilizar una codificación de 16 bits de cadenas. Java fue una de esas plataformas, y Java-Script siguió el ejemplo: Cada elemento de una cadena de JavaScript es un valor de 16 bits. Ahora, si Unicode se hubiera mantenido tal como estaba a principios de los noventa, cada elemento de una cadena de JavaScript seguiría correspondiendo a un único punto de código.</p>
<p className="p">As a result, a number of platforms at the time committed to using     a 16-bit encoding of strings. Java was one such platform, and Java- Script followed suit: Every element of a JavaScript string is a 16-bit value. Now, if Unicode had remained as it was in the early 1990s, each element of a JavaScript string would still correspond to a single code point.</p>
<p className="it">Esta gama de 16 bits es bastante grande, abarcando mucho más de los sistemas de texto del mundo que ASCII o cualquiera de sus miles de sucesores históricos nunca lo hizo. Aun así, con el tiempo quedó claro que Unicode superaría</p>
<p className="p">This 16-bit range is quite large, encompassing far more of the world’s text systems than ASCII or any of its myriad historical successors ever did. Even so, in time it became clear that Unicode would outgrow</p>
<div className="image"><a></a><img src="/static/002.png" width="100%" alt="Image"/></div>
<p className="fig">Figure 1.1 A JavaScript string containing code points from the Basic Multilingual Plane</p>
<p className="it">Su rango inicial, y el estándar se expandió a su rango actual de más de 220 puntos de código. La nueva gama aumentada se organiza en 17 subranges de 216 puntos del código cada uno. El primero de ellos, conocido como el Plano Básico Multilingüe (o BMP), consta de los 216 puntos de código originales. Las 16 gamas adicionales se conocen como los planos suplementarios.</p>
<p className="p">its initial range, and the standard expanded to its current range of over 220 code points. The new increased range is organized into 17 subranges of 216 code points each. The first of these, known as the Basic Multilingual Plane (or BMP), consists of the original 216 code points. The additional 16 ranges are known as the supplementary planes.</p>
<p className="it">Una vez que el rango de puntos de código se expandió, el UCS-2 se había vuelto obsoleto: necesitaba extenderse para representar los puntos de código adicionales. Su sucesor, UTF-16, es mayormente el mismo, pero con la adición de lo que se conoce como pares sustitutivos: pares de unidades de código de 16 bits que juntos codifican un único punto de código 216 o mayor. Por ejemplo, en el UTF-16 se representa el símbolo de clave musical G ("*"), al que se asigna el punto de código U + 1D11E -la ortografía hexadecimal convencional del número de punto de código 119.070- por el par de unidades de código 0xd834 y 0xdd1e. El punto de código se puede decodificar combinando bits seleccionados de cada una de las dos unidades de código. (Inteligentemente, la codificación se asegura de que ninguno de estos "sustituto" puede ser confundido con un punto de código BMP válido, por lo que siempre se puede saber si usted está buscando a un sustituto, Incluso si comienza a buscar desde algún lugar en medio de una cadena.) Puede ver un ejemplo de una cadena con un par de sustitución en la Figura 1.2. El primer punto de código de la cadena requiere un par de sustitución, haciendo que los índices de las unidades de código difieran de los índices de los puntos de código.</p>
<p className="p">Once the range of code points expanded, UCS-2 had become obsolete: It needed to be extended to represent the additional code points. Its successor, UTF-16, is mostly the same, but with the addition of what are known as surrogate pairs: pairs of 16-bit code units that together encode a single code point 216  or greater. For  example, the musical   G clef symbol (“٭”), which is assigned the code point U+1D11E—the conventional hexadecimal spelling of code point number 119,070—is represented in UTF-16 by the pair of code units 0xd834 and 0xdd1e. The code point can be decoded by combining selected bits from each of the two code units. (Cleverly, the encoding ensures that neither of these “surrogates” can ever be confused for a valid BMP code point, so you can always tell if you’re looking at a surrogate, even if you start searching from somewhere in the middle of a string.) You can see an example of a string with a surrogate pair in Figure 1.2. The first code point of the string requires a surrogate pair, causing the indices of code units to differ from the indices of code points.</p>
<p className="it">Debido a que cada punto de código en una codificación UTF-16 puede requerir una o dos unidades de código de 16 bytes, UTF-16 es una codificación de longitud variable: El tamaño en memoria de una cadena de longitud n varía basado en el código particular Puntos en la cadena. Además, encontrar el n-ésimo punto de código de una cadena ya no es una operación de tiempo constante: generalmente requiere buscar desde el principio de la cadena.</p>
<p className="p">Because each code point in a UTF-16 encoding may require either one or two 16-byte code units, UTF-16 is a variable-length encoding: The size in memory of a string of length n varies based on the particu-  lar code points in the string. Moreover, finding the nth code point of  a string is no longer a constant-time operation: It generally requires searching from the beginning of the string.</p>
<p className="it">Pero cuando Unicode se expandió en tamaño, JavaScript ya se había comprometido a elementos de cadena de 16 bits. Las propiedades de cadena y los métodos tales como length, charAt y charCodeAt funcionan a nivel de código</p>
<p className="p">But by the time Unicode expanded in size, JavaScript had already committed to 16-bit string elements. String properties and methods such as length, charAt, and charCodeAt all work at the level of code</p>
<div className="image"><a></a><img src="/static/003.png" width="100%" alt="Image"/></div>
<p className="fig">Figure 1.2 A JavaScript string containing a code point from a supplementary plane</p>
<p className="it">Unidades en lugar de puntos de código. Por lo tanto, cada vez que una cadena contiene puntos de código de los planos suplementarios, JavaScript representa cada uno como dos elementos, el par de sustituto UTF-16 del punto de código, en lugar de uno. Simplemente pon:</p>
<p className="p">units rather than code points. So whenever a string contains code points from the supplementary planes, JavaScript represents each as two elements—the code point’s UTF-16 surrogate pair—rather than one. Simply put:</p>
<p className="it">Un elemento de una cadena de JavaScript es una unidad de código de 16 bits.</p>
<p className="p">An element of a JavaScript string is a 16-bit code unit.</p>
<p className="it">Internamente, los motores JavaScript pueden optimizar el almacenamiento de contenido de cadena. Pero en lo que se refiere a sus propiedades y métodos, las cadenas se comportan como secuencias de unidades de código UTF-16. Considere la cadena de la Figura 1.2. A pesar de que la cadena contiene seis puntos de código, JavaScript informa su longitud como 7:</p>
<p className="p">Internally, JavaScript engines may optimize the storage of string contents. But as far as their properties and methods are concerned, strings behave like sequences of UTF-16 code units. Consider the string from Figure 1.2. Despite the fact that the string contains six code points, JavaScript reports its length as 7:</p>
<pre><code>
"٭  clef".length; // 7<br></br>
"G clef".length; // 6
</code></pre>
<p className="it">La extracción de elementos individuales de la cadena produce unidades de código en lugar de puntos de código:</p>
<p className="p">Extracting individual elements of the string produces code units rather than code points:</p>
<pre><code>
"٭ clef".charCodeAt(0);   // 55348 (0xd834) "٭ clef".charCodeAt(1);   // 56606 (0xdd1e) "٭ clef".charAt(1) === " "; // false<br></br>
"٭ clef".charAt(2) === " "; // true
</code></pre>
<p className="it">Del mismo modo, las expresiones regulares funcionan a nivel de unidades de código. El patrón de un solo carácter (".") Coincide con una única unidad de código:</p>
<p className="p">Similarly, regular expressions operate at the level of code units. The single-character pattern (“.”) matches a single code unit:</p>
<pre><code>
/^.$/.test("٭");	// false<br></br>
/^..$/.test("٭"); // true
</code></pre>
<p className="it">Este estado de cosas significa que las aplicaciones que trabajan con la gama completa de Unicode tienen que trabajar mucho más: No pueden confiar en métodos de cadena, valores de longitud, búsquedas indexadas o muchos patrones de expresión regulares. Si está trabajando fuera del BMP, es una buena idea buscar ayuda de bibliotecas de código apuntador. Puede ser complicado obtener los detalles de codificación y decodificación correcta, por lo que es aconsejable utilizar una biblioteca existente en lugar de implementar la lógica por sí mismo.</p>
<p className="p">This state of affairs means that applications working with the full range of Unicode have to work a lot harder: They can’t rely on string methods, length values, indexed lookups, or many regular expres- sion patterns. If you are working outside the BMP, it’s a good idea to look for help from code point-aware libraries. It can be tricky to get the details of encoding and decoding right, so it’s advisable to use an existing library rather than implement the logic yourself.</p>
<p className="it">Mientras que el tipo de datos de cadena incorporado de JavaScript funciona a nivel de unidades de código, esto no impide que las API sean conscientes de los puntos de código y los pares sustitutivos. De hecho, algunas de las bibliotecas ECMAScript estándar manejan correctamente pares sustitutivos, como las funciones de manipulación URI encodeURI, decodeURI, encodeURIComponent y decodeURIComponent. Siempre que un entorno JavaScript proporcione una biblioteca que funcione en cadenas (por ejemplo, manipular el contenido de una página web o realizar E / S con cadenas), consulte la documentación de la biblioteca para ver cómo maneja la gama completa de puntos de código Unicode .</p>
<p className="p">While JavaScript’s built-in string datatype operates at the level of code units, this doesn’t prevent APIs from being aware of code points and surrogate pairs. In fact, some of the standard ECMAScript libraries cor- rectly handle surrogate pairs, such as the URI manipulation functions encodeURI, decodeURI, encodeURIComponent, and decodeURIComponent. Whenever a JavaScript environment provides a library that operates on strings—for example, manipulating the contents of a web page or performing I/O with strings—you should consult the library’s docu- mentation to see how it handles the full range of Unicode code points.</p>
<h3>Things to Remember</h3>
<p className="it">✦ Las cadenas de JavaScript consisten en unidades de código de 16 bits, no en puntos de código Unicode.</p>
<p className="p">✦	JavaScript strings consist of 16-bit code units, not Unicode code points.</p>
<p className="it">✦ Los puntos de código Unicode 216 y superiores están representados en JavaScript por dos unidades de código, conocidas como un par sustituto.</p>
<p className="p">✦	Unicode code points 216 and above are represented in JavaScript by two code units, known as a surrogate pair.</p>
<p className="it">✦ Los pares sustitutivos descartan los conteos de elementos de cadenas, afectando la longitud, charAt, charCodeAt y patrones de expresión regular como ".".</p>
<p className="p">✦	Surrogate pairs throw off string element counts, affecting length, charAt, charCodeAt, and regular expression patterns such as “.”.</p>
<p className="it">✦ Utilizar bibliotecas de terceros para escribir manipulación de cadenas de código de puntos.</p>
<p className="p">✦	Use third-party libraries for writing code point-aware string manipulation.</p>
<p className="it">✦ Siempre que utilice una biblioteca que funcione con cadenas, consulte la documentación para ver cómo maneja la gama completa de puntos de código.</p>
<p className="p">✦	Whenever you are using a library that works with strings, con-  sult the documentation to see how it handles the full range of code points.</p>
</div>
</div>
  </Layout>
)
