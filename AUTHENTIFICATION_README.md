# Gestion de l'Authentification au Niveau des Pages

Ce document explique comment l'authentification est maintenant gérée au niveau des pages individuelles plutôt que de manière centralisée.

## Architecture

### Hook personnalisé `useAuth`

Un hook personnalisé `useAuth` a été créé pour gérer l'état d'authentification de manière centralisée mais réutilisable :

```typescript
import { useAuth } from '../hooks/useAuth';

const { userName, isAuthenticated, logout } = useAuth();
```

**Fonctionnalités :**
- Vérification automatique de l'état de connexion
- Récupération du nom d'utilisateur
- Fonction de déconnexion
- Événements personnalisés pour synchroniser l'état entre composants

### Composant `UserMenu` modifié

Le composant `UserMenu` reçoit maintenant l'état d'authentification en props plutôt que de le gérer lui-même :

```typescript
<UserMenu
  cartItemsCount={cartItemsCount}
  onCartClick={onCartClick}
  userName={userName}
  isAuthenticated={isAuthenticated}
  onLogout={logout}
/>
```

### Gestion au niveau des pages

Chaque page peut maintenant gérer l'authentification de manière spécifique :

#### Protection des pages

```typescript
// Dans UserDashboard.tsx
const { isAuthenticated } = useAuth();

useEffect(() => {
  if (!isAuthenticated) {
    navigate('/login');
  }
}, [isAuthenticated, navigate]);
```

#### Redirections conditionnelles

```typescript
// Dans LoginPage.tsx
const { isAuthenticated } = useAuth();

useEffect(() => {
  if (isAuthenticated) {
    navigate('/home');
  }
}, [isAuthenticated, navigate]);
```

#### Contenu personnalisé

```typescript
// Dans ShopPage.tsx
const { isAuthenticated, userName } = useAuth();

return (
  <div>
    {isAuthenticated && userName && (
      <p>Bienvenue de retour, {userName} !</p>
    )}
    {/* Contenu de la page */}
  </div>
);
```

## Avantages de cette approche

1. **Flexibilité** : Chaque page peut avoir sa propre logique d'authentification
2. **Performance** : Évite les re-renders inutiles du composant UserMenu
3. **Maintenabilité** : Logique d'authentification centralisée dans un hook réutilisable
4. **Sécurité** : Protection granulaire des pages sensibles
5. **UX améliorée** : Messages personnalisés et redirections contextuelles

## Pages modifiées

- `LoginPage.tsx` : Redirection si déjà connecté
- `UserDashboard.tsx` : Protection de la page + message de bienvenue
- `ShopPage.tsx` : Message de bienvenue personnalisé
- `Navbar.tsx` : Utilise le hook useAuth
- `UserMenu.tsx` : Reçoit l'état en props

## Utilisation dans de nouvelles pages

Pour ajouter l'authentification à une nouvelle page :

```typescript
import { useAuth } from '../hooks/useAuth';

export default function MaNouvellePage() {
  const { isAuthenticated, userName, logout } = useAuth();

  // Protection de la page si nécessaire
  if (!isAuthenticated) {
    return <div>Accès refusé</div>;
  }

  return (
    <div>
      <h1>Ma Nouvelle Page</h1>
      {userName && <p>Bonjour {userName}</p>}
    </div>
  );
}
```