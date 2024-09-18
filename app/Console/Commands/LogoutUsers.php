<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\Token;

class LogoutUsers extends Command
{
    /**
     * Le nom et la signature de la commande console.
     *
     * @var string
     */
    protected $signature = 'logout:all';

    /**
     * La description de la commande console.
     *
     * @var string
     */
    protected $description = 'Déconnecte tous les utilisateurs en révoquant leurs tokens';

    /**
     * Crée une nouvelle instance de commande.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Exécute la commande console.
     *
     * @return int
     */
    public function handle()
    {
        $this->logoutAllUsers();
        return 0; // Indique que la commande s'est terminée correctement
    }

    /**
     * Déconnecte tous les utilisateurs en révoquant leurs tokens.
     */
    private function logoutAllUsers()
    {
        $sessionFiles = glob(storage_path('framework/sessions/*'));

        foreach ($sessionFiles as $file) {
            if (is_file($file)) {
                unlink($file);
            }
        }

        $this->info('Tous les utilisateurs ont été déconnectés avec succès.');
    }

}
