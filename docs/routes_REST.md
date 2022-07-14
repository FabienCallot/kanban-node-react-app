# Routes

| URL | GET | POST | PATCH | DELETE |
|---|---|---|---|---|
| /lists | ✅ | ✅ | ❌ | ❌ |
| /lists/:id | ✅ | ❌ | ✅ | ✅ |
| /cards | ✅ | ✅ | ❌ | ❌ |
| /cards/:id | ✅ | ❌ | ✅ | ✅ |
| /tags | ✅ | ✅ | ❌ | ❌ |
| /tags/:id | ✅ | ❌ | ✅ | ✅ |

| URL | GET | POST | PATCH | DELETE |
|---|---|---|---|---|
| /lists | récupérer toutes les listes | créer une liste | Cela devrait mettre à jour toutes les listes (cela ne se fait pas dans une API REST pas de config de route) | supprimer toutes les listes(ne pas faire!) |
| /lists/:id | récupérer UNE liste via son ID | créer une listes en fixant son id d'avance (NE PAS FAIRE!) | mettre à jour une liste via son ID | supprimer une liste via son ID |
| /cards | récupérer toutes les cates | créer une carte | mettre à jour toutes les cartes(ne pas faire !) | supprimer toutes les cartes(ne pas faire!) |
| /cards/:id | récupérer UNE carte via son ID | créer une carte en fixant son id d'avance (NE PAS FAIRE!) | mettre à jour une carte via son ID | supprimer une carte via son ID |
| /tags| récupérer tous les labels | créer un label | mettre à jour tous les labels(ne pas faire !) | supprimer tous les labels(ne pas faire!) |
| /tags/:id | récupérer UN label via son ID | créer un label en fixant son id d'avance (NE PAS FAIRE!) | mettre à jour un label via son ID | supprimer un label via son ID |
