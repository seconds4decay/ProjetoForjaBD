/* Listar os nomes e cidades das lojas que mais venderam em termos de valor total. */
select l.nome, l.cidade, sum(i.valor) as 'Valor Total de Vendas'
from loja l join venda v 
on v.loja = l.ID_loja
join item i
on v.item = i.ID_item
group by l.nome, l.cidade
order by sum(i.valor) desc
;

/* Buscar por nome - Adapatar essa query para todas as entidades - substituir 'string' pela pesquisa do user */
select *
from ferreiro f 
where f.nome like 'string%'
;

/* Busca de itens por intervalo de valores - substituir 0 e 1000 para os valores indicados pelo user */
select *
from item i 
where i.valor between 0 and 1000
;

/* Para cada ferreiro, mostrar o total de itens que fabricou entre duas datas específicas - substituir as datas por valores indicados
 * pelo user */
select f.ID_ferreiro, f.nome, l.nome as 'Loja', count(i.ID_item) as 'Total de Itens Fabricados'
from ferreiro f join item i 
on i.ferreiro = f.ID_ferreiro
join loja l
on f.loja = l.ID_loja
where i.data_fabricacao between '2024-01-01' and '2024-12-31'
group by f.ID_ferreiro, f.nome, l.nome
order by count(i.ID_item) desc
;

/* Mostrar os clientes que têm pedidos por status - substituir status por user input  */
select c.nome, rp.ID_pedido, rp.status
from cliente c join requisicao_pedido rp 
on rp.cliente = c.ID_cliente
where rp.status = 'Em produção'
;

/* Listar os clientes que compraram mais de um item de alguma raridade e quantos itens dessa
 * raridade foram comprados - substituir a raridade por user input */
select c.nome, count(i.ID_item) as 'Quantidade de Itens Comprados'
from cliente c join venda v
on v.cliente = c.ID_cliente
join item i 
on v.item = i.ID_item
where i.raridade = 'Comum'
group by c.nome
having count(i.ID_item) > 1
;

/* Retornar os nomes dos ferreiros que fabricam exclusivamente armas */
select f.nome
from ferreiro f join item i
on i.ferreiro = f.ID_ferreiro
join arma a 
on a.Item = i.ID_item
where f.ID_ferreiro not in (
	select i.ferreiro
	from armadura a join item i 
	on a.Item = i.ID_item
)
;

/* Retornar os nomes dos ferreiros que fabricam exclusivamente armaduras */
select f.nome
from ferreiro f join item i
on i.ferreiro = f.ID_ferreiro
join armadura a 
on a.Item = i.ID_item
where f.ID_ferreiro not in (
	select i.ferreiro
	from arma a join item i 
	on a.Item = i.ID_item
)
;

/* Retornar os nomes dos ferreiros que fabricaram exclusivamente armas durante um período de tempo 
 * Substituir datas por user input */
select f.nome
from ferreiro f join item i
on i.ferreiro = f.ID_ferreiro
join arma a 
on a.Item = i.ID_item
where f.ID_ferreiro not in (
	select i.ferreiro
	from armadura a join item i 
	on a.Item = i.ID_item
) and i.data_fabricacao between '2024-01-01' and '2024-12-31'
;

/* Retornar os nomes dos ferreiros que fabricaram exclusivamente armaduras durante um período de tempo 
 * Substituir datas por user input */
select f.nome
from ferreiro f join item i
on i.ferreiro = f.ID_ferreiro
join armadura a 
on a.Item = i.ID_item
where f.ID_ferreiro not in (
	select i.ferreiro
	from arma a join item i 
	on a.Item = i.ID_item
) and i.data_fabricacao between '2024-01-01' and '2024-12-31'
;

/* Exibir id, nome e quantidade de itens comprados dos clientes considerados regulares
 * Clientes são considerados regulares quando já compraram mais de X (valor a ser decidido) produtos */
select c.ID_cliente , c.nome, count(v.item) as 'Total de Compras'
from cliente c join venda v 
on v.cliente = c.ID_cliente
group by c.ID_cliente, c.nome
having count(v.item) > 1 -- valor X a ser dicidido
;