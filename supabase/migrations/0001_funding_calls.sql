create table public.funding_calls (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  financeur text not null,
  date_limite date,
  montant_max_centimes bigint check (montant_max_centimes is null or montant_max_centimes >= 0),
  thematiques text[] not null default '{}',
  url text,
  description text,
  created_by uuid not null references auth.users (id),
  created_at timestamptz not null default now()
);

alter table public.funding_calls enable row level security;

create policy "funding_calls_select_own"
  on public.funding_calls for select
  to authenticated
  using (created_by = auth.uid());

create policy "funding_calls_insert_own"
  on public.funding_calls for insert
  to authenticated
  with check (created_by = auth.uid());
