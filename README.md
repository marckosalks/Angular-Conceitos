# 🅰️Plano de Estudos Essencial para Entrevista Técnica

---

### **Prioridade Alta: O Core Essencial**

Estes são os pilares que você **precisa dominar** para qualquer vaga de Angular e para demonstrar uma base sólida. Dedique a maior parte do seu tempo a eles.

---

### **Fase 1: Angular - O Coração da Aplicação**

### 1. Fundamentos e Estrutura

- **O que estudar:**
    - **Angular:** O que é (framework, SPA), suas vantagens e onde se encaixa no desenvolvimento web.
    - **Estrutura de Projeto:** O papel de **Módulos**, **Componentes** (e seu ciclo de vida: `ngOnInit`, `ngOnChanges`, `ngOnDestroy`), e **Serviços** na organização do código.
    - **Data Binding:** Domine **One-way** (Property Binding `[]`, Event Binding `()`) e **Two-way Binding** `[()]`.
    - **Diretivas:** `ngIf`, `ngFor` (com `trackBy` para performance!), `ngClass`, `ngStyle`. Entenda como e quando usar **diretivas customizadas**.
    - **Pipes:** Como transformar dados (`DatePipe`, `CurrencyPipe`). Saiba criar **pipes customizados**.
- **Material de Apoio:**
    - [Documentação Oficial do Angular](https://angular.io/docs) (Comece pelas seções "Tour of Heroes" ou "Understanding Angular").
    - Tutoriais de introdução ao Angular no YouTube (ex: Loiane Groner, Alura).

### 2. Serviços e Injeção de Dependência

- **O que estudar:**
    - **Criação e Uso de Serviços:** Entenda o `@Injectable()` e como fornecer serviços (`providedIn: 'root'`, módulos, componentes).
    - **Mecanismo de Injeção de Dependência (ID):** Como o Angular resolve e entrega as dependências.
    - **Singleton vs. Múltiplas Instâncias:** Quando um serviço é um singleton e como controlar isso.
- **Material de Apoio:**
    - Seção de "Services and Dependency Injection" na documentação do Angular.
    - Artigos sobre "Dependency Injection in Angular".

### 3. Roteamento (Routing)

- **O que estudar:**
    - **Configuração de Rotas:** Como definir `path`, `component`, `redirectTo`.
    - **Rotas com Parâmetros:** Capturar parâmetros de rota com `ActivatedRoute`.
    - **Navegação Programática:** Usando o `Router` para navegar via código.
    - **Guards:** **`CanActivate`** (para proteger rotas é essencial), `CanDeactivate`.
    - **Lazy Loading de Módulos:** Como configurar e sua importância vital para a performance de grandes aplicações.
- **Material de Apoio:**
    - Documentação oficial sobre "Routing and Navigation".
    - Exemplos práticos de lazy loading.

### 4. RxJS e HTTP Client

- **O que estudar:**
    - **Conceito de Observables:** O que são, como funcionam (`subscribe`/`unsubscribe`).
    - **Operadores RxJS mais Comuns:** **`map`**, **`filter`**, **`switchMap`** (muito importante para chamadas aninhadas de API), `tap`, `debounceTime`.
    - **HTTP Client:** Como fazer requisições **GET, POST, PUT, DELETE** com `HttpClient`.
    - **Tratamento de Erros:** Usando `pipe(catchError(...))`.
    - **Interceptors:** Como e por que usar (e.g., para adicionar tokens de autenticação, logar erros, tratar erros globais).
- **Material de Apoio:**
    - Documentação do Angular sobre `HttpClient`.
    - [RxJS Official Documentation](https://rxjs.dev/guide/overview) (Guia rápido).
    - Tutoriais e exemplos sobre "RxJS Operators in Angular" e "Angular HTTP Interceptors".

### 5. Formulários (Template-driven vs. Reactive)

- **O que estudar:**
    - **Diferenças e Vantagens/Desvantagens:** Saiba quando usar **Template-driven** (simples) e **Reactive Forms** (complexo, escalável, testável). **Foque mais em Reactive Forms.**
    - **Reactive Forms:** `FormGroup`, `FormControl`, `FormArray`.
    - **Validações:** Validações básicas (`required`, `minLength`, `email`) e como criar **validações customizadas**.
    - **Estados dos Controles:** `touched`, `dirty`, `valid`, `invalid`.
- **Material de Apoio:**
    - Seção de "Forms" na documentação do Angular.
    - Exemplos práticos de formulários reativos com validações.

---

### **Fase 2: Performance, Testes e Arquitetura**

Estes tópicos demonstram um nível mais avançado e maturidade no desenvolvimento. São diferenciais importantes.

---

### 6. Performance no Angular

- **O que estudar:**
    - **Change Detection:** Entenda como o Angular detecta e atualiza a UI.
    - **OnPush Strategy:** Como usar `ChangeDetectionStrategy.OnPush` para otimizar a detecção de mudanças (muito importante!).
    - **`ChangeDetectorRef` (detach/markForCheck):** Controle manual da detecção de mudanças.
    - **`trackBy` no `ngFor`:** Para otimizar a renderização de listas.
    - **Lazy Loading de Módulos:** Reforçar a importância para o carregamento inicial.
- **Material de Apoio:**
    - Artigos sobre "Angular Change Detection Strategy".
    - Vídeos sobre otimização de performance em Angular.

### 7. Testes Unitários (Angular com Jasmine/Karma ou Jest)

- **O que estudar:**
    - **Por que Testar?** Importância dos testes unitários (qualidade, refatoração, documentação).
    - **Ferramentas:** Jasmine (framework de testes), Karma (test runner). Se usar **Jest**, revise os conceitos dele.
    - **Testando Componentes:**
        - **`TestBed`:** Como configurar um ambiente de teste isolado para componentes.
        - **`fixture.detectChanges()`:** Quando e por que chamar.
        - **Interagindo com o DOM:** `DebugElement`, `By.css`, simular eventos.
        - **Mocks e Spies:** Usar `spyOn` para mockar serviços ou métodos.
    - **Testando Serviços:** Como mockar `HttpClient` com `HttpClientTestingModule` e `HttpTestingController`.
- **Material de Apoio:**
    - Documentação oficial do Angular sobre "Testing".
    - Tutoriais sobre "Angular Unit Testing with Jasmine and Karma/Jest".

### 8. Micro-frontends (com foco em Angular)

- **O que estudar:**
    - **Conceito:** O que são micro-frontends, seus **benefícios** (autonomia de equipes, escalabilidade, mix de tecnologias) e **desafios** (comunicação, deployment, coerência visual).
    - **Padrões de Implementação:**
        - **Module Federation (Webpack 5):** **Foque neste**, pois é a abordagem mais moderna e eficaz para Angular. Entenda como funciona a exposição e consumo de módulos.
        - Mencione `Iframes` (limitações) e `Web Components` (alternativa).
    - **Comunicação entre Micro-frontends:** Estratégias (eventos customizados, shared services, Pub/Sub).
    - **Estratégias de Deployment:** Como cada micro-frontend pode ser deployado independentemente.
- **Material de Apoio:**
    - Artigos e palestras sobre "Micro-frontends com Angular e Module Federation".
    - Exemplos de projetos no GitHub usando Module Federation.

---

### **Fase 3: CI/CD e Infraestrutura (DevOps)**

Esses tópicos são cruciais para mostrar que você entende o ciclo de vida completo do software, desde o desenvolvimento até a entrega em produção.

---

### 9. Jenkins (CI/CD para Angular)

- **O que estudar:**
    - **Conceitos de CI/CD:** **Integração Contínua**, **Entrega Contínua**, **Deployment Contínuo** (defina cada um e suas diferenças).
    - **Jenkins como Ferramenta de Automação:** Sua função no pipeline.
    - **Jenkinsfile (Pipeline as Code):** A importância de pipelines definidos em código. Estrutura básica (`pipeline`, `agent`, `stages`, `steps`).
    - **Stages Comuns para um Projeto Angular:**
        - `Checkout`: Obter o código do repositório.
        - `Install Dependencies`: `npm install`.
        - `Run Tests`: `ng test --watch=false --browsers=ChromeHeadless` (para ambientes CI).
        - `Build`: `ng build --configuration=production` (ou `-prod`).
        - `Artifacts`: Como e por que empacotar o build.
        - `Deploy`: Como o build é levado para o ambiente de destino (e.g., para um bucket S3).
    - **Plugins:** Mencione a funcionalidade de plugins para estender o Jenkins.
- **Material de Apoio:**
    - Documentação do Jenkins sobre "Pipelines as Code".
    - Tutoriais sobre "Jenkins Pipeline for Angular Applications".

### 10. AWS (Amazon Web Services)

- **O que estudar (foco em hospedagem web):**
    - **S3 (Simple Storage Service):**
        - Para que serve (armazenamento de objetos).
        - Como **hospedar um site estático** (aplicação Angular `ng build --prod`) em um bucket S3.
        - Configuração de buckets, políticas de bucket para acesso público.
    - **CloudFront:**
        - O que é CDN (Content Delivery Network) e seus benefícios (velocidade, latência reduzida).
        - Como o CloudFront acelera a entrega do seu site globalmente.
        - **Integração com S3** como origem.
    - **IAM (Identity and Access Management):**
        - Gerenciamento de usuários, grupos, roles e políticas de acesso (importância para segurança).
    - **Route 53 (DNS):**
        - Como configurar domínios e apontar para seu site hospedado no S3/CloudFront.
- **Opcional (para se destacar, se houver tempo e familiaridade):**
    - **Lambda (Serverless):** Para APIs de backend sem servidor.
    - **EC2 (Elastic Compute Cloud):** Se a aplicação tivesse um backend tradicional em servidor.
    - **VPC (Virtual Private Cloud):** Entendimento básico de redes na AWS.
- **Material de Apoio:**
    - Documentação da AWS para S3, CloudFront, IAM, Route 53.
    - Tutoriais sobre "Hosting a Static Website on AWS S3 and CloudFront".

---

### **Dicas Finais para a Entrevista:**

- **Seja Honesto:** Se não souber algo, diga que não sabe, mas que tem interesse em aprender.
- **Exemplos Reais:** Tente relacionar os conceitos com projetos ou experiências que você teve. Isso demonstra que você não apenas memorizou, mas entendeu e aplicou.
- **Pergunte:** Prepare algumas perguntas para o entrevistador sobre a equipe, o projeto, a cultura da empresa. Isso demonstra interesse e proatividade.
- **Revisão Final:** No dia anterior, faça uma revisão rápida dos pontos mais importantes e durma bem.

Com este plano, você estará bem preparado para abordar todos os tópicos importantes na sua entrevista. Boa sorte!
