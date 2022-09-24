# Generated by Django 4.1.1 on 2022-09-24 18:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Consulta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('relatorio', models.TextField()),
                ('horario_consulta', models.DateTimeField()),
                ('endereco', models.CharField(max_length=50)),
                ('sala', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=50)),
                ('cnpj', models.IntegerField()),
                ('endereco', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('senha', models.CharField(max_length=30)),
                ('nome', models.CharField(max_length=100)),
                ('cpf', models.CharField(max_length=11)),
                ('telefone', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Sala',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipoSala', models.CharField(max_length=30)),
                ('consulta_sala', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='consultaSala', to='main.consulta')),
            ],
        ),
        migrations.CreateModel(
            name='Medico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('senha', models.CharField(max_length=30)),
                ('nome', models.CharField(max_length=100)),
                ('crm', models.CharField(max_length=11)),
                ('telefone', models.CharField(max_length=20)),
                ('hospital', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.hospital')),
            ],
        ),
        migrations.CreateModel(
            name='Medicamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('precricaoMedica', models.TextField()),
                ('consultaMedicamento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.consulta')),
            ],
        ),
        migrations.CreateModel(
            name='Enfermeiro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('senha', models.CharField(max_length=30)),
                ('nome', models.CharField(max_length=100)),
                ('coren', models.CharField(max_length=11)),
                ('telefone', models.CharField(max_length=20)),
                ('hospital', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.hospital')),
            ],
        ),
        migrations.AddField(
            model_name='consulta',
            name='enfermeiro',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.enfermeiro'),
        ),
        migrations.AddField(
            model_name='consulta',
            name='medico',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.medico'),
        ),
        migrations.AddField(
            model_name='consulta',
            name='paciente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.paciente'),
        ),
    ]