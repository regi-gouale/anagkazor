import React from 'react'

export const AppFooter = () => {
  return (
    <footer>
      <div className="w-full mx-auto h-10 bg-primary"></div>
      <div className="w-full bg-secondary">
        <div className="container mx-auto flex flex-col justify-between items-center h-full text-xs">
          <div className="text-foreground flex my-4 gap-2 max-w-xl:flex-col">
            <p>© 2024 Anagkazor</p>
            <p>Mon profil missionnaire.</p>
            <p>Tous droits réservés - Mentions légales</p>
          </div>
          <div className="text-foreground flex my-4 gap-2">
            <p>Designed by Régi GOUALE</p>
            <p>Powered by Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
