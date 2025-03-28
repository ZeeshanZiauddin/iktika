@props(['href', 'active' => false])
<li {{ $attributes->merge(['class' => 'menu-item menu-item-type-post_type menu-item-object-page  ' . ($active ? ' current-menu-item page_item page-item-7 current_page_item' : '')]) }}>
    <a href="{{$href}}" aria-current="{{$active ? "page" : ""}}">{{ $slot }}</a>
</li>