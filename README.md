
![Space Image](docs/unsplash_teddykelley__4Ib-a8g9aA.jpeg "Unsplash @teddykelley")

[Purple Night Sky (@teddykelley on Unsplash)](https://unsplash.com/photos/_4Ib-a8g9aA)

# Xanderia Monorepo

This monorepo contains all apps and services for the Xanderia app suite.

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
