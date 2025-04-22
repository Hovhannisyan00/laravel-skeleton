<x-dashboard.layouts.app>
    <x-slot name="scripts">
        @viteReactRefresh
        @vite(['resources/js/dashboard/react/dashboard-app-react.jsx'])
    </x-slot>

    <div class="container-fluid">
        <div id="app"></div>
    </div>
</x-dashboard.layouts.app>
