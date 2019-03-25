
![Space Image](docs/unsplash_teddykelley__4Ib-a8g9aA_882px.jpg "Unsplash @teddykelley")

[Purple Night Sky (@teddykelley on Unsplash)](https://unsplash.com/photos/_4Ib-a8g9aA)

# Xanderia Monorepo

This monorepo contains all apps and services for the Xanderia app suite,
leveraging the `XATA` architecture stack.

# Apps

- shop-playground

# Architecture

Expo, Firebase

# Structure

| Folder | Description |
| :----- | :---------- |
| `/`    | Configuration Files |
| `/xata` | XATA library, used by others projects |
| `/functions` | Firebase Functions for all server-side services |
| `/docs` | Documentation |
| `/<app>` | Specific app, e.g. `/chat`, `/calendar`, `tasks` |
| `/<app>/src` | Source code |
| `/<app>/dist` | Distributable files, i.e. `/android`, `/ios`, `/web` |


# Branches

| Branch | Description |
| :----- | :---------- |
| `master`    | Master |

# Database and Services

## Database and Service Architecture

Xanderia uses the XATA database and service architecture.
XATA defines multiple layers of how services and their data are organized:


| **Layers** | Adapters | Core | Client |
| --- | --- | --- | --- |
| **Description** | Adapters connect to external parties, e.g. PayPal. | Core services handle the main functionality from external input (i.e. adapter or client) or internal processes. | Client-focused services communicate with clients and offer narrowed down functionality. |
| **Example** | PayPal webhook comes in and its information is passed to a core service. | Core service uses incoming PayPal webhook to let client service know to notify users. | Client-focused service writes notification information in session data for client to consume. |


## Database Schema

| Collection | Description |
| :----- | :---------- |
| `master`    | Master |
