
## 📚 Resumo dos Estudos em Angular

---

### ✨ Conceitos Essenciais

* **📦 Gestão de Dependências:**
    * **Singletons:** Serviços injetados no `root` têm tempo de vida igual ao da aplicação.
    * **Injeção Específica:** Use `@Self()` para limitar a injeção ao escopo local do componente.

* **🧠 Controle de Vazamento de Memória:**
    * **Unsubscribe Manual:** Cancele inscrições de Observables com `.unsubscribe()`.
    * **Operadores RxJS:** Use `take(1)`, `takeUntil` ou `first()` para completar automaticamente.
    * **`async` Pipe:** Automatiza o `unsubscribe` diretamente nos templates.

* **👥 Smart vs. Dumb Components:**
    * **Smart (Container):** Lida com lógica, regras de negócio e chamadas de API (ex: páginas).
    * **Dumb (Presentational):** Foca na visualização, recebendo dados via `@Input` e emitindo eventos via `@Output`.

* **⚡ OnPush Components (`ChangeDetectionStrategy.OnPush`):**
    * Melhora o desempenho detectando mudanças apenas em `@Input`s ou eventos explícitos, evitando verificações desnecessárias.

* **🚀 Melhoria de Desempenho:**
    * **Lazy Loading:** Carrega módulos apenas quando necessário, reduzindo o tamanho inicial do bundle da aplicação.

* **🧩 Migração para Standalone Components:**
    * Abordagem gradual: Crie novos componentes com `standalone: true` e atualize os `imports` nos componentes que os utilizam.

---

### ⚛️ Fundamentos de Reatividade e Interação

* **🔢 Signals:**
    * Substituto para Observables em algumas situações e complemento ao `OnPush`. Um `Signal` guarda um valor, notifica sobre mudanças e atualiza o template; similar ao `useState` e `useEffect` do React com `set()`, `update()` e `computed()`.

* **👀 Observables:**
    * Classe RxJS que representa uma coleção assíncrona de valores entregues ao longo do tempo. Permite que "Observers" se inscrevam para notificações (valores, erros, finalização), sendo crucial cancelar a inscrição para evitar vazamentos de memória. Tipos incluem `Observable`, `Subject`, `BehaviorSubject`.

* **🔗 Binding:**
    * Conecta dados do código (TS) à interface (HTML), sincronizando-os automaticamente.
    * **One-way:** Dados fluem em uma direção (ex: `{{ }}` para exibir, `[ ]` para propriedades).
    * **Two-way:** Dados fluem em ambas as direções (`[( )]`), ideal para formulários.

* **🛠️ Diretivas:**
    * Estendem o HTML com funcionalidades personalizadas.
    * **Estruturais (`*ngIf`, `*ngFor`):** Manipulam a estrutura do DOM (adicionar/remover/repetir elementos).
    * **De Atributo (`ngClass`, `ngStyle`):** Modificam aparência ou comportamento de elementos existentes.
    * **De Componente:** A forma mais comum de criar blocos de UI reutilizáveis (combinam lógica e template).

* **🌊 RXJS (Reactive Extensions for JavaScript):**
    * Simplifica a programação reativa com Observables, gerenciando eventos assíncronos (requisições, interações) para um código mais organizado e uma aplicação reativa. Ajuda a lidar com tudo que acontece ao longo do tempo.
    * **Operadores:** `pipe()`, `of()`, `tap()`, `delay()`, `debounceTime()`, `switchMap()`, `exhaustMap()`.

    * **🌡️ Hot e Cold Observables:**
        * **Cold Observables:** São **Unicast**; cada assinante tem sua própria execução independente da fonte de dados.
        * **Hot Observables:** São **Multicast**; compartilham uma única execução da fonte de dados entre múltiplos assinantes.

---

### ✅ Testes

* **🧪 TESTES:** Utiliza **Jasmine** para escrever testes e **Karma** para executá-los e depurar. Essencial para garantir que o código funcione conforme o esperado e sem falhas.
