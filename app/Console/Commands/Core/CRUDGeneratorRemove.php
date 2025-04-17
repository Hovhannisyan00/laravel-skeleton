<?php

namespace App\Console\Commands\Core;

use App\CRUDGenerator\CRUDGeneratorDelete;
use Illuminate\Console\Command;
use Illuminate\Support\Str;

class CRUDGeneratorRemove extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'remove:dashboard';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for delete created dashboard';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Function to remove dashboard generated data.
     */
    public function handle(): void
    {
        $className = $this->ask('What is your class name?');

        (new CRUDGeneratorDelete([
            'className' => Str::ucfirst($className),
        ]))->deleteCrudData();
    }
}
