# Documentação das Regras do Biome

Este documento explica detalhadamente cada configuração e regra definida no arquivo `biome.json`.

## 📊 Visão Geral

O Biome é um formatter e linter moderno para JavaScript/TypeScript que combina as funcionalidades do ESLint e Prettier em uma única ferramenta. Ele é extremamente rápido e oferece excelente experiência de desenvolvimento.

## 🔧 Configurações Gerais

### Schema
- **`$schema`**: Define o schema JSON para validação e autocomplete do arquivo de configuração

### Formatter (Formatação de Código)
- **`enabled: true`**: Habilita o formatter
- **`formatWithErrors: false`**: Não formata arquivos com erros de sintaxe
- **`indentStyle: "space"`**: Usa espaços ao invés de tabs para indentação
- **`indentWidth: 2`**: 2 espaços por nível de indentação
- **`lineEnding: "lf"`**: Terminação de linha Unix (LF)
- **`lineWidth: 80`**: Máximo de 80 caracteres por linha
- **`attributePosition: "auto"`**: Posição automática dos atributos HTML/JSX

### Files (Arquivos Processados)
```json
"includes": [
  "**/src/database/*",     // Arquivos de banco de dados
  "**/src/domains/*",      // Arquivos de domínios/regras de negócio
  "**/src/main/*",         // Arquivos principais da aplicação
  "**/src/server.ts"       // Arquivo do servidor
]
```

### Assist (Assistência ao Desenvolvimento)
- **`organizeImports: "on"`**: Auto-organiza imports automaticamente

## 🔍 Configurações do Linter

### Configurações Base
- **`enabled: true`**: Habilita o linter
- **`recommended: true`**: Usa regras recomendadas como base

## 📋 Categorias de Regras

### 🧩 Complexity (Redução de Complexidade)

| Regra | Descrição |
|-------|-----------|
| `noBannedTypes` | Proíbe tipos banidos (ex: `Object`, `String`, use `object`, `string`) |
| `noExtraBooleanCast` | Remove conversões desnecessárias para boolean (`!!value` → `Boolean(value)`) |
| `noUselessCatch` | Remove blocos catch que só relançam o erro sem processar |
| `noUselessThisAlias` | Remove alias desnecessário do `this` (ex: `const self = this`) |
| `noUselessTypeConstraint` | Remove restrições de tipo desnecessárias em generics |
| `noAdjacentSpacesInRegex` | Remove espaços adjacentes em expressões regulares |

### ✅ Correctness (Corretude do Código)

| Regra | Descrição |
|-------|-----------|
| `noConstAssign` | Proíbe reatribuição de variáveis `const` |
| `noConstantCondition` | Proíbe condições constantes (ex: `if(true)`, `while(false)`) |
| `noEmptyCharacterClassInRegex` | Proíbe classes de caracteres vazias em regex (`[]`) |
| `noEmptyPattern` | Proíbe patterns vazios em destructuring |
| `noGlobalObjectCalls` | Proíbe chamar objetos globais como função (ex: `Math()`) |
| `noInnerDeclarations` | Proíbe declarações de função/var dentro de blocos |
| `noInvalidConstructorSuper` | Valida chamadas `super()` em construtores |
| `noNonoctalDecimalEscape` | Proíbe escapes decimais não-octais em strings |
| `noPrecisionLoss` | Detecta perda de precisão em números literais |
| `noSelfAssign` | Proíbe auto-atribuição (ex: `x = x`) |
| `noSetterReturn` | Proíbe `return` em métodos setter |
| `noSwitchDeclarations` | Proíbe declarações em `switch` sem blocos |
| `noUndeclaredVariables` | Detecta variáveis não declaradas |
| `noUnreachable` | Detecta código inacessível após `return`, `throw`, etc. |
| `noUnreachableSuper` | Detecta `super()` inacessível |
| `noUnsafeFinally` | Detecta uso inseguro de `finally` (return/throw) |
| `noUnsafeOptionalChaining` | Detecta optional chaining inseguro |
| `noUnusedImports` | Remove imports não utilizados |
| `noUnusedLabels` | Remove labels não utilizados |
| `noUnusedVariables` | Detecta variáveis declaradas mas não utilizadas |
| `useIsNan` | Força uso de `isNaN()` ao invés de `=== NaN` |
| `useValidForDirection` | Valida direção de loops `for` |
| `useYield` | Força uso de `yield` em generators |
| `noInvalidBuiltinInstantiation` | Proíbe instanciação inválida de built-ins |
| `useValidTypeof` | Valida operador `typeof` |

### 🎨 Style (Estilo de Código)

| Regra | Status | Descrição |
|-------|--------|-----------|
| `noNamespace` | OFF | Permite uso de namespaces TypeScript |
| `noParameterAssign` | OFF | Permite reatribuição de parâmetros de função |
| `useAsConstAssertion` | ERROR | Força uso de `as const` quando apropriado |
| `useBlockStatements` | OFF | Não força uso de chaves em statements |
| `useArrayLiterals` | OFF | Não força uso de array literals |

### 🔍 Suspicious (Código Suspeito/Problemático)

| Regra | Descrição |
|-------|-----------|
| `noAssignInExpressions` | Proíbe atribuição dentro de expressões |
| `noAsyncPromiseExecutor` | Proíbe executor async em construtor Promise |
| `noCatchAssign` | Proíbe reatribuição da variável do bloco catch |
| `noClassAssign` | Proíbe reatribuição de classes |
| `noCompareNegZero` | Proíbe comparação com `-0` |
| `noControlCharactersInRegex` | Proíbe caracteres de controle em regex |
| `noDebugger` | Proíbe declarações `debugger` |
| `noDuplicateCase` | Proíbe cases duplicados em switch |
| `noDuplicateClassMembers` | Proíbe membros duplicados em classes |
| `noDuplicateObjectKeys` | Proíbe chaves duplicadas em objetos literais |
| `noDuplicateParameters` | Proíbe parâmetros duplicados em funções |
| `noEmptyBlockStatements` | Proíbe blocos de código vazios |
| `noExplicitAny` | OFF - Permite uso explícito de `any` |
| `noExtraNonNullAssertion` | Remove assertions `!` desnecessárias |
| `noFallthroughSwitchClause` | Detecta fallthrough não intencional em switch |
| `noFunctionAssign` | Proíbe reatribuição de declarações de função |
| `noGlobalAssign` | Proíbe reatribuição de variáveis globais |
| `noImportAssign` | Proíbe reatribuição de imports |
| `noMisleadingCharacterClass` | Detecta classes de caracteres enganosas em regex |
| `noMisleadingInstantiator` | Detecta instanciadores enganosos |
| `noPrototypeBuiltins` | Proíbe chamada direta de métodos do prototype |
| `noRedeclare` | Proíbe redeclaração de variáveis |
| `noShadowRestrictedNames` | Proíbe sombrear nomes restritos |
| `noUnsafeDeclarationMerging` | Detecta declaration merging inseguro |
| `noUnsafeNegation` | Detecta negação insegura |
| `useAwait` | Força uso de `await` em funções async |
| `useGetterReturn` | Força `return` em métodos getter |
| `noWith` | Proíbe declarações `with` |

## 📁 Arquivos Incluídos/Excluídos

### Incluídos
- `**` - Todos os arquivos por padrão

### Excluídos
- `!**/.serverless` - Pasta do Serverless Framework
- `!**/node_modules` - Dependências
- `!**/dist` - Arquivos compilados
- `!**/coverage` - Relatórios de cobertura de testes
- `!**/*.json` - Arquivos JSON
- `!**/docs` - Documentação
- `!**/*.sh` - Scripts shell
- `!**/build.ts` - Scripts de build
- `!**/dist-lambda` - Builds para AWS Lambda

## 🔧 Configurações JavaScript/TypeScript

### JavaScript Formatter
| Configuração | Valor | Descrição |
|--------------|-------|-----------|
| `jsxQuoteStyle` | "double" | Aspas duplas em atributos JSX |
| `quoteProperties` | "asNeeded" | Aspas em propriedades apenas quando necessário |
| `trailingCommas` | "all" | Vírgulas finais em todos os lugares possíveis |
| `semicolons` | "always" | Sempre usar ponto e vírgula |
| `arrowParentheses` | "always" | Sempre usar parênteses em arrow functions |
| `bracketSpacing` | true | Espaço dentro de chaves de objetos |
| `bracketSameLine` | false | Chave de fechamento em nova linha |
| `quoteStyle` | "single" | Aspas simples por padrão |
| `attributePosition` | "auto" | Posição automática de atributos |

## 📝 Overrides para TypeScript

### Arquivos Afetados
- `**/*.ts` - Arquivos TypeScript
- `**/*.tsx` - Arquivos TypeScript React
- `**/*.mts` - Módulos TypeScript
- `**/*.cts` - CommonJS TypeScript

### Regras Desabilitadas (TypeScript já verifica)

#### Correctness
- `noConstAssign` - TS já verifica reatribuição de const
- `noGlobalObjectCalls` - TS já verifica chamadas de objetos globais
- `noInvalidConstructorSuper` - TS já verifica super() em construtores
- `noSetterReturn` - TS já verifica return em setters
- `noUndeclaredVariables` - TS já verifica variáveis não declaradas
- `noUnreachable` - TS já detecta código inacessível
- `noUnreachableSuper` - TS já detecta super() inacessível
- `noInvalidBuiltinInstantiation` - TS já verifica instanciação de built-ins

#### Suspicious
- `noDuplicateClassMembers` - TS já detecta membros duplicados
- `noDuplicateObjectKeys` - TS já detecta chaves duplicadas
- `noDuplicateParameters` - TS já detecta parâmetros duplicados
- `noFunctionAssign` - TS já verifica reatribuição de funções
- `noImportAssign` - TS já verifica reatribuição de imports
- `noRedeclare` - TS já verifica redeclaração
- `noUnsafeNegation` - TS já detecta negação insegura
- `useGetterReturn` - TS já verifica return em getters

### Regras Específicas para TypeScript

#### Style
- `useConst` - Força uso de `const` quando a variável não é reatribuída

#### Suspicious
- `noVar` - Proíbe uso de `var` (usar `let`/`const`)

#### Complexity
- `noArguments` - Proíbe uso do objeto `arguments` (usar rest parameters)

## 🚀 Benefícios da Configuração

### Performance
- ✅ Ferramenta única para linting e formatting
- ✅ Extremamente rápida (escrita em Rust)
- ✅ Configuração unificada

### Qualidade do Código
- ✅ Detecta erros comuns e bugs potenciais
- ✅ Força boas práticas de TypeScript
- ✅ Remove código morto e imports não utilizados
- ✅ Mantém consistência de formatação

### Experiência de Desenvolvimento
- ✅ Auto-organização de imports
- ✅ Formatação automática no save
- ✅ Feedback imediato no editor
- ✅ Configuração específica para TypeScript

## 💡 Dicas de Uso

1. **Integração com VS Code**: Instale a extensão oficial do Biome
2. **Format on Save**: Configure o editor para formatar automaticamente
3. **Ignoring Rules**: Use comentários `// biome-ignore` quando necessário
4. **CI/CD**: Integre verificações do Biome no pipeline
5. **Team Standards**: Use esta configuração como base para padrões da equipe