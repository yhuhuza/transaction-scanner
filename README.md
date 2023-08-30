# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

Концепция:
Расширение для браузера, которое позволяет отслеживать свои или любые другие транзакции. Пример, вы совершили транзакцию, получили Txn hash номер и хотите отслеживать ее статус и вместо того, чтобы переходить на всем известные вебсайты вы можете открыть расширение и быстро отследить статус транзакции. Расширение должно работать с разными криптовалютными сетями, на первом этапе будут доступны tronscan и ethereum. Для получения информации мы будем совершать запросы в API определенных серверов.

Структура приложения будет выглядеть следующим образом.
Главная страница, на которой присутствует header и main часть. В хэдере мы можем выбрать криптовалютную сеть и справа будут минимальные настройки. Выбор криптовалютных сетей будет в виде списка (или можно сделать отдельную мини страницу). В настройки я пока хз че запихнуть кроме языка и оформления темы.
Далее будет main часть приложения, там будет инпутк куда мы будем вставлять, к примеру Txn hash, и ниже под инпутом получать информацию о транзакции. Ничего не нашли заглушка тип ой сорри. Если ничего в инпут не ввели можно показывать какую-нибудь другую информацию.К примеру информацию о последних сделках китов.

Далее следует секция где расположена информация о уже найденных транзакциях пользователя, чтобы он смог оперативно их найти. Чуть выше этой секции будет ссылка, которая будет редиректить нас на другую страницу где и будут показаны все recent transactions. Было бы замечательно по клику на определенную иконку у транзакции редиректить пользователя на полноэкранную html страницу, где мы бы могли сформировать и скачать чек в виде pdfки.

Плюс можно трекать по регэкспинам различные биржи и предупреждать людей о подозрительных транзакциях (тип что этот адрес это мошенники скорее всего) или о том, что выбранной сет (к примеру TRC20) не соответствует введенный адресс.

"Concept:
A browser extension that allows you to track your own or any other transactions. For example, you've completed a transaction, received a Txn hash number, and want to track its status. Instead of visiting various well-known websites, you can open the extension and quickly monitor the transaction's status. The extension should work with different cryptocurrency networks; initially, tronscan and ethereum will be available. To gather information, we'll make requests to specific server APIs.

The app's structure will look as follows:
Main page with a header and main section. In the header, we can select a cryptocurrency network, and minimal settings will be on the right. The selection of cryptocurrency networks will be in the form of a list (or you could create a separate mini-page). As for settings, I'm not sure what to include apart from language and theme customization.
Next, the main section of the app, where there will be an input field where we can paste a Txn hash, for example, and below the input, we will receive information about the transaction. If nothing is found, a placeholder like 'Oops, sorry' can be displayed. If nothing is entered in the input, some other information can be shown.""For instance, information about recent whale transactions.

Next, there will be a section where information about already discovered user transactions is located, allowing them to quickly find them. Slightly above this section, there will be a link that redirects us to another page where all recent transactions are displayed. It would be great if clicking on a specific transaction's icon could redirect the user to a fullscreen HTML page, where we could generate and download a receipt in PDF format."

"Additionally, it's possible to track various exchanges using regular expressions and alert users about suspicious transactions (for example, indicating that a particular address is likely associated with scammers) or about a mismatch between the selected network (such as TRC20) and the entered address."
