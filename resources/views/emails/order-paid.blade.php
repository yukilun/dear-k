<x-mail::message>
# Order Confirmation - #{{ str_pad($order->id, 10, '0', STR_PAD_LEFT) }}

## Thank you for your order.
We'll send your another email once it is shipped.

<x-mail::button url="{{route('order', $order, true)}}">
View My Order
</x-mail::button>

<x-mail::table>
| Product   | Price    | Quantity    |
|:----------|:--------:|:-----------:|
@foreach ($order->orderItems as $item)
|<img src="{{asset('storage/' . $item->inventory->product->images[0]->image_url)}}" style="width: 50px; float: left; margin-right: 10px"/>{{$item->inventory->product->product_name}} <br/> ({{$item->inventory->color->color_name}} / {{$item->inventory->size->size_name}})|${{$item->unit_price}}|{{$item->quantity}}|
@endforeach
</x-mail::table>


<x-mail::table>
|           |          | 
|:----------|---------:|
| Subtotal<br/>Sales Tax<br/>Shipping<br/>**Total** |${{$order->subtotal}}<br/>${{$order->sales_tax}}<br/>{{$order->shipping_fee == 0 ? 'FREE': '$'.$order->shipping_fee }}<br/>**${{$order->total}}**|
</x-mail::table>

<x-mail::table>
|   Shipping Address       |     Billing Address    | 
|:----------|:---------|
| {{$order->orderShippingDetail->name}}<br/>{{preg_replace('/(\d{3})(\d{3})(\d{4})/','+1 ($1) $2-$3', $order->orderShippingDetail->phone)}}<br/>{{$order->orderShippingDetail->street_address}}<br/>{{$order->orderShippingDetail->city}} {{$order->orderShippingDetail->province_code}} {{$order->orderShippingDetail->postal_code}} | {{$order->orderBillingDetail->name}}<br/>{{$order->orderBillingDetail->street_address}}<br/>{{$order->orderBillingDetail->city}} {{$order->orderBillingDetail->province_code}} {{$order->orderBillingDetail->postal_code}}|
</x-mail::table>


Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
